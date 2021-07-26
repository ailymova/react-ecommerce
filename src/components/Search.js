import './Search.scss';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { containerVariants } from '../config/animationVariants';

const Search = ({ handleQuery }) => {
  return (
    <motion.div
      className="search"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <input
        type="text"
        className="search-input"
        placeholder="Search for products"
        onChange={e => handleQuery(e.target.value)}
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </motion.div>
  );
};

export default Search;
