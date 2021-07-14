import { ReactComponent as Logo } from '../assets/logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/">
        <Logo className="header__logo" title="Logo" />
      </Link>
    </header>
  );
};

export default Header;
