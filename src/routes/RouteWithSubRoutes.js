import { Redirect, Route } from 'react-router-dom';
import { RouteDefaultProps, RoutePropTypes } from './routes';

function RouteWithSubRoutes({ exact, path, to, component: Component, routes }) {
  return to ? (
    <Redirect exact={exact} from={path} to={to} />
  ) : (
    <Route exact={exact} path={path} render={(props) => <Component {...props} routes={routes} />} />
  );
}

RouteWithSubRoutes.propTypes = RoutePropTypes;

RouteWithSubRoutes.defaultProps = RouteDefaultProps;

export default RouteWithSubRoutes;
