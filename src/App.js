import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import routes from './config/routes';
import {
  FaShoppingCart as FaCart,
  FaUserCircle,
  FaSignInAlt,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ThemeSwitch from './components/Theme';
import { /* ThemeSelectorContext, */ themes } from './config/theme';

function App() {
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
    //<ThemeSelectorContext.Provider value={(toggleTheme, themeName)}>
    <Router>
      <Header />
      <MenuBar>
        <ul className="menu-bar__items">
          <li key="cart" className="menu-bar__item">
            <a href="#cart">
              <FaCart />
              <span>Cart</span>
            </a>
          </li>
          <li key="login" className="menu-bar__item">
            <Link to="/login">
              <FaUserCircle />
              <span>Login</span>
            </Link>
          </li>
          <li key="signup" className="menu-bar__item">
            <Link to="/signup">
              <FaSignInAlt />
              <span>Signup</span>
            </Link>
          </li>
          <li key="theme" className="menu-bar__item">
            <ThemeSwitch
              toggle={toggleTheme}
              on={theme === themes.light ? false : true}
            />
          </li>
        </ul>
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
    // </ThemeSelectorContext.Provider>
  );
}

export default App;
