import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Cash, Folder, MusicNoteBeamed } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';

import '../../styles/Layout.scss';
import image from '../../assets/layout/image.PNG'

const featureList = [
    { icon: MusicNoteBeamed, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet." },
    { icon: Cash, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet." },
    { icon: Folder, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet." },
]

const FeatureElement = (props) => {
    const { feature } = props;
    return (
        <Row className="features-element">
            <Col md={1}>
                <feature.icon className="services-element-icon" />
            </Col>
            <Col md={11}>
                <h6 className="features-element-text">{feature.title}</h6>
                <h6 className="features-element-text">{feature.text}</h6>
            </Col>
        </Row>
    )
}

const Features = (props) => {
    return (
        <Container className="features" id="features" fluid>
            <div style={{ width: '50%' }} >
                <h2 style={{ fontWeight: 700 }}>Caracteristicas</h2>
                <hr className="primary-hr" />
            </div>
            <Row>
                <Col lg={9}>
                    {featureList.map((feature, key) =>
                        <FeatureElement key={key} feature={feature} />)}
                </Col>
                <Col lg={3} style={{ textAlign: 'center' }}>
                    <Image src={image} />
                </Col>
            </Row>
        </Container>
    )
}

export default Features;