import { Outlet, Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout = () => (
    <div>
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to="/">React Routings</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/secondcomponent"> Second Component</Link></Nav.Link>
            <Nav.Link><Link to="/thirdcomponent"> Third Component</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/* <nav>
            <p className="lead">
                <Link to="/">Home</Link>  |  

                <Link to="/secondcomponent"> Second Component</Link> | 
                <Link to="/thirdcomponent"> Third Component</Link> | 
            </p>
        </nav> */}
        <hr />
        <Outlet />

    </div>
);

export default Layout;
