import './MenuBar.scss';
import { motion } from 'framer-motion';

const MenuBar = ({ children }) => {
  return (
    <motion.nav
      whileHover={{
        right: -32,
        transition: { type: 'spring', duration: 0.5, bounce: 0.3 },
      }}
      className="menu-bar__container"
    >
      {children}
    </motion.nav>
  );
};

export default MenuBar;
