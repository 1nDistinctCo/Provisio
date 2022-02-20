import '../styles/styles.scss';
import { Navbar, Nav } from 'react-bootstrap'
const NavBar = () => {
  return (
    <Navbar className="navBar">
      <Navbar.Brand href="/" >
        <img src='/logo.png' alt="logo" style={{
              maxWidth:150, maxHeight: 150,
              width:'auto',height:'auto',
              textAlign:'left',float:'left',
              }}/>{' '}
        
      </Navbar.Brand>
      <h5>The Potential Of Happiness</h5>
      
     <Nav>
      {/* <Nav.Link href='/'>Home</Nav.Link> */}
      <Nav.Link href='/' >Home</Nav.Link>
     </Nav>
    </Navbar>
  );
};

export default NavBar;