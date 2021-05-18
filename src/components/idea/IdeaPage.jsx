import React from 'react';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';

import IdeaNavbar from './IdeaNavbar';
import ShareIdea from './ShareIdea';
import IdeaList from './IdeaList';

import '../../styles/Idea.scss';

const IdeaPage = (props) => {
    return (
        <Container fluid className="idea-page">
            <IdeaNavbar />
            <ShareIdea/>
            <IdeaList/>
        </Container>
    )
}

const mapStateToProps = state => {
    return { state };
};

export default connect(mapStateToProps, {})(IdeaPage);