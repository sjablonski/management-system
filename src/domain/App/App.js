import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from 'routes/RenderRoutes';
import routes from 'routes/routes';
import './App.scss';

function App() {
  return (
    <Router>
      <RenderRoutes routes={routes} />
    </Router>
  );
}

export default App;
