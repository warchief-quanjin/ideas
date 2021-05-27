import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Calendar, Chat, Envelope, GeoAltFill, PersonFill, TelephoneFill } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';

import '../../styles/Layout.scss';

const ContactForm = () => {
    return (
        <Form >
            <Form.Group className="contact-form-group" controlId="name">
                <PersonFill className="contact-form-icon" />
                <Form.Control
                    placeholder="Nombre"
                />
            </Form.Group>
            <Form.Group className="contact-form-group" controlId="email">
                <Envelope className="contact-form-icon" />
                <Form.Control
                    placeholder="Correo Electronico"
                />
            </Form.Group>
            <Form.Group className="contact-form-group" controlId="phone">
                <TelephoneFill className="contact-form-icon" />
                <Form.Control
                    placeholder="Telefono"
                />
            </Form.Group>
            <Form.Group className="contact-form-group" controlId="date">
                <Calendar className="contact-form-icon" />
                <Form.Control type="date" name="dob" placeholder="Elegir fecha" />
            </Form.Group>
            <Form.Group className="contact-form-group" controlId="message">
                <Chat className="contact-form-icon" />
                <FormControl as="textarea" rows="7" placeholder="Mensaje" aria-label="Mensaje" />
            </Form.Group>
            <Button className="contact-form-button" variant="default">
                Enviar
            </Button>
        </Form>
    )
}

const MapCard = (props) => {
    return (
        <Card className="contact-map-card">
            <iframe title="map" /* width="300"  */ height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=221b%20Baker%20Street,%20London&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            <Card.Body>
                <Card.Title>Ubicacion</Card.Title>
                <hr className="primary-hr" />
                <div>
                    <Row style={{ margin: '5px 0px' }}>
                        <TelephoneFill className="contact-form-icon" /> 33 1234 5678
                    </Row>
                    <Row style={{ margin: '5px 0px' }}>
                        <Envelope className="contact-form-icon" />info@emprend.com
                    </Row>
                    <Row style={{ margin: '5px 0px' }}>
                        <GeoAltFill className="contact-form-icon" />221b Baker Street, London
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}

const Contact = (props) => {
    return (
        <Container className="contact" id="contact" fluid>
            <div style={{ width: '50%' }} >
                <h2 style={{ fontWeight: 700 }}>Contacto</h2>
                <hr className="primary-hr" />
            </div>
            <Row >
                <Col>
                    <h2 style={{ fontWeight: 700 }}>Escribenos</h2>
                    <ContactForm />
                </Col>
                <Col>
                    <MapCard />
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
