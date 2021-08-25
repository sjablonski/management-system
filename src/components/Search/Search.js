import PropTypes from 'prop-types';
import './Search.scss';

function Search({ className, value, onSearch }) {
  const classList = ['search', className].join(' ');

  return (
    <label className={classList} htmlFor="search">
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

const { string, func } = PropTypes;

Search.propTypes = {
  className: string,
  value: string.isRequired,
  onSearch: func.isRequired,
};

Search.defaultProps = {
  className: '',
};

export default Search;
