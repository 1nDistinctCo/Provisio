import  Pod  from './views/pod';
import  NavBar  from './components/navBar';
import { Route, Routes } from 'react-router-dom';
import './styles/styles.css'
export const SiteRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/pod" element={<Pod />} />
        <Route path="/" element={<Pod />}/>
      </Routes>
    </div>
  );
}; 