import React from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../redux/actions";

import '../../styles/Idea.scss';

const IdeaNavbar = (props) => {
    const { user } = props;

    const userLogout = () => {
        const { logout } = props;

        logout()
    }

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
                <Nav.Link href="#ideas">Ideas</Nav.Link>

                <Button className="logout-button" onClick={() => userLogout()} variant="light">
                    {user.name} <FontAwesomeIcon icon={faSignOutAlt} />
                </Button>
                {/* <Nav className="name-container">
                    <Nav.Item className="nav-user-name">{user.name}</Nav.Item>
                </Nav>
                <Button onClick={() => userLogout()} variant="light">Logout</Button> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        user: state.login.user
    };
};

export default connect(mapStateToProps, { logout })(IdeaNavbar);
