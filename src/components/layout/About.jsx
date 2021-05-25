import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../../styles/Layout.scss';
import image from '../../assets/layout/desk.jpg'

const About = (props) => {
    return (
        <Container className="about" id="about" fluid>
            <Row>
                <Col sm={12} lg={6} className="about-text-column">
                    <div className="about-text-container">
                        <h2 style={{ fontWeight: 700 }}>Nosotros</h2>
                        <hr className='primary-hr'/>
                        <p style={{ fontSize: '13px'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit ornare fusce convallis sociosqu mattis, primis velit erat urna quis non in est venenatis eros commodo, class odio tortor rutrum justo nullam ac sagittis eleifend cubilia pellentesque.</p>
                        <p style={{ fontSize: '13px'}}>Tincidunt feugiat massa sociis fringilla molestie vehicula purus et, volutpat tristique gravida mauris habitant suspendisse fusce ante, posuere mus faucibus cursus rutrum risus ornare.</p>
                        <Button className="about-button">Soy un boton</Button>
                    </div>
                </Col>
                <Col sm={12} lg={6}  style={{ padding: '0px'}}>
                    <Image className="about-image" src={image} />
                </Col>
            </Row>
        </Container>
    )
}

export default About;