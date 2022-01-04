import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SiteRoutes } from './routes'; 

ReactDOM.render(
  
  <Router>
    <SiteRoutes />
  </Router>,
  document.getElementById('root')
);

