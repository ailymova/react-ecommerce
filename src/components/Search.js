import './Search.scss';
import { FaSearch } from 'react-icons/fa';

const Search = ({ handleQuery }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products"
        onChange={e => handleQuery(e.target.value)}
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
