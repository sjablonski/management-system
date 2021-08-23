import { useState } from 'react';
import PropTypes from 'prop-types';
import './TableHeaderCell.scss';

function TableHeaderCell({ header, onClickHeader }) {
  const [sort, setSort] = useState('ASC');

  const handleOnClickSort = (name) => {
    setSort((prev) => (prev === 'ASC' ? 'DESC' : 'ASC'));
    onClickHeader(name);
  };

  const handleKeyDownSort = (ev, name) => {
    if (ev.keyCode === 13) {
      handleOnClickSort(name);
    }
  };

  if (header.sort) {
    return (
      <th
        className="table__header-cell table__header-cell--clickable"
        role="button"
        tabIndex="0"
        onClick={() => handleOnClickSort(header.name)}
        onKeyDown={(ev) => handleKeyDownSort(ev, header.name)}
      >
        {header.label}
        <span className="material-icons-outlined table__sort-icon">
          {sort === 'ASC' ? 'expand_more' : 'expand_less'}
        </span>
      </th>
    );
  }

  return <th className="table__header-cell">{header.label}</th>;
}

TableHeaderCell.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
  onClickHeader: PropTypes.func.isRequired,
};

export default TableHeaderCell;
