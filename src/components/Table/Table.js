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

const { arrayOf, shape, string, func, node } = PropTypes;

Table.propTypes = {
  headers: arrayOf(
    shape({
      name: string,
      label: string,
      sort: string,
    })
  ).isRequired,
  onClickHeader: func.isRequired,
  children: node.isRequired,
};

export default Table;
