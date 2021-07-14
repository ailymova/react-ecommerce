import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import routes from './config/routes';
import {
  /*FaSearch, FaMoon */
  FaShoppingCart as FaCart,
  FaUserCircle,
  FaSignInAlt,
  FaSun,
} from 'react-icons/fa';

function App() {
  return (
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
            <a href="#theme">
              <FaSun />
              <span>Theme</span>
            </a>
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
  );
}

export default App;
