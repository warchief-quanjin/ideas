import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Envelope, Facebook, Google, Instagram, Linkedin, TelephoneFill, Twitch, Twitter, Youtube } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcAmex, faCcDiscover, faCcMastercard, faCcPaypal, faCcStripe, faCcVisa } from "@fortawesome/free-brands-svg-icons";

import '../../styles/Layout.scss';

const payments = [
    { icon: faCcVisa },
    { icon: faCcMastercard },
    { icon: faCcDiscover },
    { icon: faCcAmex },
    { icon: faCcPaypal },
    { icon: faCcStripe }
]

const socialNetworks = [
    { icon: Facebook },
    { icon: Twitter },
    { icon: Linkedin },
    { icon: Google },
    { icon: Twitch },
    { icon: Youtube },
    { icon: Instagram }
]

const Footer = (props) => {
    return (
        <Container className="footer" id="footer" fluid>
            <Col md={8} style={{ margin: 'auto' }}>
                <h2 style={{ fontWeight: 700 }}>emprenD</h2>
                <hr className="primary-hr" />
                <Row>
                    <Col>
                        <Row>
                            <Col xs={3} style={{ display: 'grid', placeItems: 'center' }}>
                                <TelephoneFill />
                            </Col>
                            <Col xs={9}>
                                <h6>Telefono:</h6>
                                <h6>(33) 1234 5678</h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h6>Aceptamos</h6>
                        {payments.map((payment, key) =>
                            <FontAwesomeIcon key={key} className="footer-payment-icon" icon={payment.icon} />)}
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={3} style={{ display: 'grid', placeItems: 'center' }}>
                                <Envelope />
                            </Col>
                            <Col xs={9}>
                                <h6>Contacto</h6>
                                <h6>info@emprend.com</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Row className="footer-lower">
                <Col>
                    Neubox - Derechos Reservados
                </Col>
                <Col>
                    {socialNetworks.map((sNetwork, key) =>
                        <sNetwork.icon key={key} className="footer-lower-icon" />
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
