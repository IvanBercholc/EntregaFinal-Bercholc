import CartWidget from './CartWidget.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="index.html"><img src="./assets/ricalogo.png" width="80px"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Wave">Wave</Nav.Link>
            <Nav.Link href="#Cuin">Cuin</Nav.Link>
            <Nav.Link href="#Basics">Basics</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    );
}

export default NavBar;