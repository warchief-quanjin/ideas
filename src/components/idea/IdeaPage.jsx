import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import ShareIdea from './ShareIdea';
import IdeaList from './IdeaList';
import IdeaNavbar from './IdeaNavbar';

import '../../styles/Idea.scss';

const IdeaPage = (props) => {
    const { errorMessage } = props;

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (errorMessage)
            setShowAlert(true)
    }, [errorMessage])

    return (
        <Container id="ideas" fluid className="idea-page">
            <IdeaNavbar />
            {showAlert && <Alert variant={'danger'} onClose={() => setShowAlert(false)} dismissible>
                {errorMessage}
            </Alert>}
            <ShareIdea />
            <IdeaList />
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        errorMessage: state.idea.errorMessage,
        logged: state.login.logged,
        loading: state.login.loading
    };
};

export default connect(mapStateToProps, {})(IdeaPage);
