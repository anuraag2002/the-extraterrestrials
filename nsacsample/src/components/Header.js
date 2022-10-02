import { Routes,Route,NavLink, useNavigate } from "react-router-dom";
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
                <Navbar.Brand href=""><a href="http://parkersolarprobe.jhuapl.edu/" class="nav-title">Parker Solar Probe</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="ms-auto">
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                    <a className="nav-link text-white me-2" href="#home">{('Home')}</a>
                    <a className="nav-link text-white me-2" href="#mission">{('mission')}</a>
                    <a className="nav-link text-white" href="#gallery">{('gallery')}</a>
                    <a className="nav-link text-white" href="#timeline">{('timeline')}</a>
                    <NavDropdown className="nav-dropdown" title={<span className="text-white">Take a look</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item  className = "bg-secondary text-white" href="#action/3.1">Images</NavDropdown.Item>
              <NavDropdown.Item className = "bg-secondary text-white" href="#action/3.2">
                Videos
              </NavDropdown.Item>
              <NavDropdown.Item className = "bg-secondary text-white" href="#action/3.3">Audio</NavDropdown.Item>
            </NavDropdown>
        
                    </Nav>

                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>

    );
}
export default Header;