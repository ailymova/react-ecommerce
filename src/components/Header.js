import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants } from '../config/animationVariants';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <motion.header
      className="header__container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Link to="/">
        <Logo className="header__logo" title="Logo" />
      </Link>
    </motion.header>
  );
};

export default Header;
