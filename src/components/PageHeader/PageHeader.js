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

const { string, node } = PropTypes;

PageHeader.propTypes = {
  icon: string,
  title: string.isRequired,
  children: node,
};

PageHeader.defaultProps = {
  icon: null,
  children: null,
};

export default PageHeader;
