import Card from 'components/Card';
import PropTypes from 'prop-types';
import './PageHeader.scss';

function PageHeader({ icon, title, children }) {
  return (
    <Card>
      <header className="page-header">
        <div className="page-header__title">
          <span className="material-icons page-header__icon">{icon}</span>
          <span>{title}</span>
        </div>
        {children}
      </header>
    </Card>
  );
}

PageHeader.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  icon: null,
  children: null,
};

export default PageHeader;
