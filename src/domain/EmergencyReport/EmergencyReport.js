import PropTypes from 'prop-types';
import Button from 'components/Button';
import PageHeader from 'components/PageHeader';
import RenderRoutes from 'routes/RenderRoutes';
import { RoutePropTypes } from 'routes/routes';
import './EmergencyReport.scss';

function EmergencyReport({ routes }) {
  return (
    <main>
      <PageHeader icon="view_list" title="Lista zgłoszeń">
        <Button icon="add">Dodaj zgłoszenie</Button>
      </PageHeader>
      <RenderRoutes routes={routes} />
    </main>
  );
}

EmergencyReport.propTypes = {
  routes: PropTypes.arrayOf(RoutePropTypes()).isRequired,
};

export default EmergencyReport;
