import { Pod }  from './views/pod';
import Home from './views/home';
import  NavBar  from './components/navBar';
import { Route, Routes } from 'react-router-dom';

import './styles/styles.scss';



export const SiteRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/pod" element={<Pod />} />
        <Route path="/" element={<Home />}/>
      </Routes>
      <footer>
    
      </footer>
    </div>
  );
}; 