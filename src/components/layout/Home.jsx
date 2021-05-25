import React from 'react';
import Container from 'react-bootstrap/Container';

import '../../styles/Layout.scss';

const Home = (props) => {
    return (
        <Container className="home" id="home" fluid>
            <div>
                <h1 style={{ fontWeight: 700 }}>¿TE GUSTA EMPRENDER?</h1>
                <hr className='primary-hr' />
                <h6>Nosotros te ayudamos a hacerlo</h6>
            </div>
        </Container>
    )
}

export default Home;