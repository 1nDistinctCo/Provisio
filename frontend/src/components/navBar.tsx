import { Link } from 'react-router-dom';
import '../styles/styles.css';
const NavBar = () => {
  return (
    <div className='NavBar'>
    <img src='/logo.png' alt="logo" style={{
              maxWidth:150, maxHeight: 150,
              width:'auto',height:'auto',
              textAlign:'left',float:'left'
              }}/> 
    <h1 style={{color:'rgb(163, 159, 159)'}}>The InDistinct Co</h1>
    <Link className='NavBarLink' to="/">Home</Link>
    <Link className='NavBarLink' to="/pod">Picture Of the Day</Link>
    </div>
  );
};
// <a href='https://pngtree.com/so/Pure'>Pure png from pngtree.com/</a>
export default NavBar;