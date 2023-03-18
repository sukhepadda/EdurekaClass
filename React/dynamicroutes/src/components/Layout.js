import { Outlet, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Layout.css";

const Layout = () => (
  <div>
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/listwithaccordion"> Accordion List with Dynamic Link</Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  </div>
);

export default Layout;
