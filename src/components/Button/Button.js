import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, icon, type, className }) {
  const classNames = ['button', className];

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames.join(' ')}>
      {icon && <span className="material-icons-outlined button__icon">{icon}</span>}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  icon: null,
  type: 'button',
  className: '',
};

export default Button;
