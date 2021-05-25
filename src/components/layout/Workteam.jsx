import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { EnvelopeFill, Facebook, Google, Instagram, Linkedin, Twitch, Twitter, Youtube } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';

import '../../styles/Layout.scss';

const personList = [
    { name: "Layne Staley", photo: "/layne.jpg", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet." },
    { name: "Johnny Cash", photo: "/cash.jpg", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet." },
    { name: "Vicente Fernandez", photo: "/chente.jpg", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet." },
]

const socialNetworks = [
    { icon: EnvelopeFill },
    { icon: Facebook },
    { icon: Google },
    { icon: Instagram },
    { icon: Linkedin },
    { icon: Twitch },
    { icon: Twitter },
    { icon: Youtube }
]

const WorkteamElement = (props) => {
    const { person } = props;

    return (
        <Container className="workteam-element">
            <Image className="workteam-element-image" src={person.photo} roundedCircle />
            <h4 className="workteam-element-title">{person.name}</h4>
            <h6 className="workteam-element-text">{person.text}</h6>
            <Row>
                {socialNetworks.map((sNetwork, key) =>
                    <Col key={key} xs={3}>
                        <sNetwork.icon className="workteam-element-social" />
                    </Col>)}
            </Row>
        </Container>
    )
}

const Workteam = (props) => {
    return (
        <Container className="workteam" id="workteam" fluid>
            <div style={{ width: '50%' }} >
                <h2 style={{ fontWeight: 700 }}>Nuestro equipo de trabajo</h2>
                <hr className="primary-hr" />
            </div>
            <h6 style={{ fontSize: 13 }}>Lorem ipsum dolor sit amet consectetur adipiscing elit non accumsan, velit per molestie urna suscipit semper malesuada sociosqu, montes dapibus auctor est diam cursus nascetur nec in, odio habitasse dictumst et porta nibh imperdiet. Lacinia duis nisi sed nibh conubia ad et, praesent litora scelerisque accumsan neque odio ultrices, lectus tortor eros euismod netus elementum.</h6>
            <Row>
                {personList.map((person, key) =>
                    <Col key={key} lg={4} style={{ padding: '20px' }}>
                        <WorkteamElement person={person} />
                    </Col>)}
            </Row>
        </Container>
    )
}

export default Workteam;