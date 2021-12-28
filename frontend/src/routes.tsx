import  Pod  from './views/pod';
import Home from './views/home';
import  NavBar  from './components/navBar';
import { Route, Routes } from 'react-router-dom';
import './styles/styles.css'
export const SiteRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/pod" element={<Pod />} />
        <Route path="/" element={<Home />}/>
      </Routes>
      <footer>
      <a style={{color:'gray'}} href='https://pngtree.com/so/Pure'>ref</a>
      </footer>
    </div>
  );
}; 