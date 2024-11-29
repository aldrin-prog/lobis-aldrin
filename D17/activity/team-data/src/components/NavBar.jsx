import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useLocation } from 'react-router-dom';
function NavBar() {
    const location=useLocation();
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">TeamData</Navbar.Brand>
            <Nav className="me-auto">
                
                <Nav.Link href="/" className={location.pathname=='/'? 'active'  :'' }>Home</Nav.Link>
                <Nav.Link href="/teams" className={location.pathname !='/'? 'active'  :'' } >Teams</Nav.Link>
            </Nav>
            </Container>
        </Navbar> 
        </>
    );
}

export default NavBar;