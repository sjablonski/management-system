import PropTypes from 'prop-types';
import './Search.scss';

function Search({ className, value, onSearch }) {
  const classNames = ['search', className];

  return (
    <label className={classNames.join(' ')} htmlFor="search">
      <span className="material-icons-outlined search__icon">search</span>
      <input
        id="search"
        className="search__input"
        type="search"
        placeholder="Szukaj..."
        onChange={(ev) => onSearch(ev.target.value)}
        value={value}
      />
    </label>
  );
}

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {
  className: '',
};

export default Search;
