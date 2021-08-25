import PropTypes from 'prop-types';
import Dashboard from 'domain/Dashboard';
import EmergencyReport from 'domain/EmergencyReport';
import EmergencyReportList from 'domain/EmergencyReport/EmergencyReportList';
import EmergencyReportMap from 'domain/EmergencyReport/EmergencyReportMap';
import paths from './paths';

const routes = [
  {
    path: paths.home,
    to: paths.dashboard,
    exact: true,
  },
  {
    path: paths.dashboard,
    component: Dashboard,
  },
  {
    path: paths.emergencyReport,
    component: EmergencyReport,
    routes: [
      {
        path: paths.emergencyReportList,
        component: EmergencyReportList,
      },
      {
        path: paths.emergencyReportList,
        component: EmergencyReportMap,
      },
      {
        path: paths.emergencyReport,
        to: paths.emergencyReportList,
        exact: true,
      },
    ],
  },
];

export function RoutePropTypes() {
  const { bool, string, elementType, arrayOf, shape } = PropTypes;

  const props = {
    exact: bool,
    path: string.isRequired,
    to: string,
    component: elementType,
  };

  return shape({
    ...props,
    routes: arrayOf(
      shape({
        ...props,
      })
    ),
  });
}

export function RouteDefaultProps() {
  return {
    exact: false,
    to: '',
    component: null,
    routes: [],
  };
}

export default routes;
