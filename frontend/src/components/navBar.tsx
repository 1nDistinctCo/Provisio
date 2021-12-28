import { Link } from 'react-router-dom';
import '../styles/styles.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
    <h1>Nasa</h1>
    <Link to="/pod">Picture Of the Day</Link>
    
    </div>
  );
};

export default NavBar;