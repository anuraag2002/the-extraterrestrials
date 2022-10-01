import { Routes,Route,NavLink, useNavigate } from "react-router-dom";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import FixedNavbar from 'axl-react-fixed-nav';
import React from "react";
import Logo from "../components/images/logo.png";
import './Header.css';
function Header(){
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand href=""><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="ms-auto">
                    <a className="nav-link" href="#home">{('Home')}</a>
                    <a className="nav-link" href="#mission">{('mission')}</a>
                    <a className="nav-link" href="#gallery">{('gallery')}</a>
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>

    );
}
export default Header;