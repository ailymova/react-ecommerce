import {
  FaShoppingCart as FaCart,
  FaUserCircle,
  FaSignInAlt,
  FaWindowClose as FaClose,
} from 'react-icons/fa';
import ThemeSwitch from '../components/Theme';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { themes } from '../config/theme';

const Menu = ({ theme, toggleTheme }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <ul className="menu-bar__items">
      <li key="cart" className="menu-bar__item">
        <a href="#cart">
          <FaCart />
          <span>Cart</span>
        </a>
      </li>
      <li key="login" className="menu-bar__item">
        {user ? (
          <Link to="/dashboard">
            <div className="menu-bar__userAvatar">
              {user.first_name
                ? `${user.first_name[0]}${user.last_name[0]}`
                : 'Loader'}
            </div>
            <span>{user.first_name}</span>
          </Link>
        ) : (
          <Link to="/login">
            <FaUserCircle />
            <span>Login</span>
          </Link>
        )}
      </li>
      <li key="signup" className="menu-bar__item">
        {user ? (
          <a href="#cerrar" onClick={() => setUser(null)}>
            <FaClose />
            <span>Logout</span>
          </a>
        ) : (
          <Link to="/signup">
            <FaSignInAlt />
            <span>Signup</span>
          </Link>
        )}
      </li>
      <li key="theme" className="menu-bar__item">
        <ThemeSwitch
          toggle={toggleTheme}
          on={theme === themes.light ? false : true}
        />
      </li>
    </ul>
  );
};

export default Menu;
