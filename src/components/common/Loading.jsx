import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'

import '../../styles/Common.scss';

const Loading = (props) => {
    return (
        <Container className="loading-container" fluid>
            <Spinner variant="primary" animation="border" />
        </Container>
    )
}

export default Loading;
