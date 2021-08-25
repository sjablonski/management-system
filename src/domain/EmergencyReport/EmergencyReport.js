import PropTypes from 'prop-types';
import Button from 'components/Button';
import PageHeader from 'components/PageHeader';
import RenderRoutes from 'routes/RenderRoutes';
import { RoutePropTypes } from 'routes/routes';
import Card from 'components/Card';
import paths from 'routes/paths';
import NavTabs from 'components/NavTabs';
import NavTabItem from 'components/NavTabs/NavTabItem';
import './EmergencyReport.scss';

function EmergencyReport({ routes }) {
  return (
    <main>
      <PageHeader icon="view_list" title="Lista zgłoszeń">
        <Button icon="add">Dodaj zgłoszenie</Button>
      </PageHeader>
      <Card className="card--pt-0">
        <NavTabs>
          <NavTabItem icon="list" label="Lista" path={paths.emergencyReportList} />
          <NavTabItem icon="map" label="Mapa" path={paths.emergencyReportMap} />
        </NavTabs>
        <RenderRoutes routes={routes} />
      </Card>
    </main>
  );
}

EmergencyReport.propTypes = {
  routes: PropTypes.arrayOf(RoutePropTypes()).isRequired,
};

export default EmergencyReport;
