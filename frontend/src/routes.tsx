import { Pod }  from './views/pod';

import  NavBar  from './components/navBar';
import { Route, Routes } from 'react-router-dom';

import './styles/styles.scss';



export const SiteRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pod />} />
      </Routes>
      <footer>
    
      </footer>
    </div>
  );
}; 