import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import '../../styles/Idea.scss';

const LayoutNavbar = (props) => {
    return (
        <Navbar sticky="top" bg="light" expand="md">
            <Navbar.Brand className="navbar-title" href="#">emprenD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#about">Nosotros</Nav.Link>
                <Nav.Link href="#services">Servicios</Nav.Link>
                <Nav.Link href="#features">Caracteristicas</Nav.Link>
                <Nav.Link href="#workteam">Equipo</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
                <Link style={{ padding: '.5rem 1rem' }} to="/idea">Ideas</Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default LayoutNavbar;
