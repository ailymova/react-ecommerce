import './Search.scss';
import { FaSearch } from 'react-icons/fa';

const Search = ({ query, handleQuery }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products"
        value={query}
        onChange={handleQuery}
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
