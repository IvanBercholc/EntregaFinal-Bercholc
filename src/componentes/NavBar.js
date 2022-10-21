import CartWidget from "./CartWidget.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../style.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src="https://res.cloudinary.com/dkb1qdwt2/image/upload/v1666308951/rica-assets/ricalogo_hfz7hg.png" width="80px" />
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <NavLink className="btn-NavBar" to="/coleccion/Wave">Wave</NavLink>
          <NavLink className="btn-NavBar" to="/coleccion/Cuin">Cuin</NavLink>
          <NavLink className="btn-NavBar" to="/coleccion/Basics">Basics</NavLink>
        </Nav>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
