import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { RoutePropTypes } from './routes';

function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
}

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf(RoutePropTypes()).isRequired,
};

export default RenderRoutes;
