import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routes from './config/routes';
import { themes } from './config/theme';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Menu from './components/Menu';
import UserProvider from './context/UserContext';

function App() {
  const location = useLocation();
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [themeName, setThemeName] = useState(
    `${mq.matches ? 'dark' : 'light'}`
  );
  const [theme, setTheme] = useState(themes[themeName]);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName('light');
    } else {
      setTheme(themes.dark);
      setThemeName('dark');
    }
  };

  const setCSSVariables = theme => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };

  useEffect(() => {
    setCSSVariables(theme);
  });

  return (
    <UserProvider>
      <Header />
      <MenuBar>
        <Menu theme={theme} toggleTheme={toggleTheme} />
      </MenuBar>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </AnimatePresence>
    </UserProvider>
  );
}

export default App;
