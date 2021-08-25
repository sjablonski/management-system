import PropTypes from 'prop-types';
import './NavTabs.scss';

function NavTabs({ children }) {
  return <div className="nav-tabs">{children}</div>;
}

NavTabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavTabs;
