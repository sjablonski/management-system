import PropTypes from 'prop-types';
import TableHeaderCell from './TableHeaderCell';
import './Table.scss';

function Table({ headers, onClickHeader, children }) {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__row">
          {headers.map((header) => (
            <TableHeaderCell key={header.name} header={header} onClickHeader={onClickHeader} />
          ))}
        </tr>
      </thead>
      <tbody className="table__body">{children}</tbody>
    </table>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      sort: PropTypes.string,
    })
  ).isRequired,
  onClickHeader: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Table;
