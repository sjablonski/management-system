import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavTabItem.scss';

function NavTabItem({ icon, label, path }) {
  return (
    <NavLink className="nav-tabs__item" activeClassName="nav-tabs__item--active" to={path}>
      {icon && <span className="material-icons-outlined nav-tabs__icon">{icon}</span>}
      {label}
    </NavLink>
  );
}

const { string } = PropTypes;

NavTabItem.propTypes = {
  icon: string,
  label: string.isRequired,
  path: string.isRequired,
};

NavTabItem.defaultProps = {
  icon: null,
};

export default NavTabItem;
