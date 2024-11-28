import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      
      <Navbar bg="dark" c data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Page</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/about" className='text-white'>About</Nav.Link>
            <Nav.Link href="/contact-us" className='text-white'>ContactUs</Nav.Link>
            <Nav.Link href="/form" className='text-white'>Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;