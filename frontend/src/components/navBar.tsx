import '../styles/styles.scss';
import { Navbar, Nav } from 'react-bootstrap'
const NavBar = () => {
  return (
    <Navbar bg='light'>
      <Navbar.Brand href="/">
        <img src='/logo.png' alt="logo" style={{
              maxWidth:150, maxHeight: 150,
              width:'auto',height:'auto',
              textAlign:'left',float:'left'
              }}/>{' '}
      The InDistinct Co
      </Navbar.Brand>
     <Nav className='me-auto'>
      <Nav.Link href='/'>Home</Nav.Link>
      <Nav.Link href='pod'>Nasa Picture Of the Day</Nav.Link>

     </Nav>
    
    </Navbar>
  );
};
// <a href='https://pngtree.com/so/Pure'>Pure png from pngtree.com/</a>
export default NavBar;