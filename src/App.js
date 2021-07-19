import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import routes from './config/routes';
import { useState, useEffect } from 'react';
import { themes } from './config/theme';
import { UserContext } from './context/UserContext';
import Menu from './components/Menu';

function App() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [themeName, setThemeName] = useState(
    `${mq.matches ? 'dark' : 'light'}`
  );
  const [theme, setTheme] = useState(themes[themeName]);

  const [user, setUser] = useState(null);

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
    //<ThemeSelectorContext.Provider value={(toggleTheme, themeName)}>
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <MenuBar>
          <Menu theme={theme} toggleTheme={toggleTheme} />
        </MenuBar>
        <Switch>
          {routes.map(route => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </UserContext.Provider>
    // </ThemeSelectorContext.Provider>
  );
}

export default App;
