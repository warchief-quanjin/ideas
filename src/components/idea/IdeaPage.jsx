import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import ShareIdea from './ShareIdea';
import IdeaList from './IdeaList';

import '../../styles/Idea.scss';

const IdeaPage = (props) => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if(props.errorMessage) {
            setShowAlert(true)
        }
    }, [props.errorMessage])

    return (
        <Container id="ideas" fluid className="idea-page">
            {showAlert && <Alert variant={'danger'} onClose={() => setShowAlert(false)} dismissible>
                {props.errorMessage}
            </Alert>}
            <ShareIdea />
            <IdeaList />
        </Container>
    )
}

const mapStateToProps = state => {
    return { 
        errorMessage: state.idea.errorMessage
     };
};

export default connect(mapStateToProps, {})(IdeaPage);