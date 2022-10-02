import { Link,Routes,Route,NavLink, useNavigate } from "react-router-dom";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import FixedNavbar from 'axl-react-fixed-nav';
import React from "react";
import Logo from "../components/images/logo.png";
import './Header.css';
function Header(){
    return (
        <div>
            <Navbar bg = "secondary" expand="lg" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand href=""><a href="#" class="nav-title">Parker Solar Probe</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="ms-auto">
                    <a className="nav-link text-white me-2" href="#home">{('Home')}</a>
                     <a className="nav-link text-white me-2" href="#mission">{('The Mission')}</a> 
                    <a className="nav-link text-white" href="#gallery">{('Gallery')}</a>
                    <NavDropdown className="nav-dropdown" title={<span className="text-white">Take a look</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item  className = "bg-secondary text-white" ><Link className="nav-link active" to='model' id="droplink">3D Model</Link></NavDropdown.Item>
              <NavDropdown.Item className = "bg-secondary text-white" ><Link className="nav-link active" to='facts' id="droplink">Did you know?</Link></NavDropdown.Item>
              <NavDropdown.Item className = "bg-secondary text-white" ><Link className="nav-link active" to='audio' id="droplink">Audio</Link></NavDropdown.Item>
            </NavDropdown>
        
                    </Nav>

                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>

    );
}
export default Header;