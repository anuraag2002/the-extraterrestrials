import { Routes,Route,NavLink, useNavigate } from "react-router-dom";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import React from "react";
import Logo from "../components/images/logo.png";
import './Header.css';
function Header(){
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href=""><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="ms-auto">
                    <NavLink className="nav-link" to="">{('Home')}</NavLink>
                    <NavLink className="nav-link" to="mission">{('mission')}</NavLink>
                    <NavLink className="nav-link" to="gallery">{('gallery')}</NavLink>
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>

    );
}
export default Header;