import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Calendar, Display, Folder, Keyboard, Laptop, Save } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';

import '../../styles/Layout.scss';

const servicesList = [
    { icon: Laptop, text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis nisi." },
    { icon: Keyboard, text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis nisi." },
    { icon: Folder, text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis nisi." },
    { icon: Calendar, text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis nisi." },
    { icon: Display, text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis nisi." },
    { icon: Save, text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis nisi." }
]

const ServiceElement = (props) => {
    const { service } = props;
    return (
        <Col >
            <service.icon className="services-element-icon" />
            <p>{service.text}</p>
        </Col>
    )
}

const Services = (props) => {
    return (
        <Container className="services" id="services" fluid>
            <div style={{ width: '50%' }} >
                <h2 style={{ fontWeight: 700 }}>Servicios</h2>
                <hr className="primary-hr" />
            </div>
            <Row className="services-element-container">
                {servicesList.map((service, key) => <ServiceElement key={key} service={service} />)}
            </Row>
        </Container>
    )
}

export default Services;
