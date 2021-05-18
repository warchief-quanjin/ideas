import React from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { logout } from "../../redux/actions";

import '../../styles/Idea.scss';

const IdeaNavbar = (props) => {
    const { user } = props;

    const userLogout = () => {
        const { logout } = props;

        logout()
    }

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand className="navbar-title" href="#">emprenD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="name-container">
                    <Nav.Item className="nav-user-name">{user.name}</Nav.Item>
                </Nav>
                <Button onClick={() => userLogout()} variant="light">Logout</Button>
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
