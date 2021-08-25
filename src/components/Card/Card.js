import PropTypes from 'prop-types';
import './Card.scss';

function Card({ className, children }) {
  const classList = ['card', className].join(' ');

  return <div className={classList}>{children}</div>;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  className: '',
  children: null,
};

export default Card;
