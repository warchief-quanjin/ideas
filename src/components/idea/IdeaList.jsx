import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import IdeaElement from './IdeaElement'
import { getIdeas } from "../../redux/actions";

import '../../styles/Idea.scss';

const IdeaList = (props) => {
    const { ideas, ideaSaved, loading, nextIdeas, prevIdeas, getIdeas } = props;

    const [page, setPage] = useState(1)

    useEffect(() => {
        // const { getIdeas } = props;

        getIdeas(page)
    }, [])

    useEffect(() => {
        if (ideaSaved)
            getIdeas(page)
    }, [ideaSaved])

    useEffect(() => {
        getIdeas(page)
    }, [page])

    return (
        <Container fluid className="idea-list-container">
            <Container fluid className="button-pagination-container">
                <Button onClick={() => setPage(page - 1)} disabled={!prevIdeas} className="button-pagination">
                    <ArrowLeft />
                </Button>
                <Button onClick={() => setPage(page + 1)} disabled={!nextIdeas} className="button-pagination">
                    <ArrowRight />
                </Button>
            </Container>
            {!loading ?
                ideas.map((idea, key) => <IdeaElement idea={idea} key={key} />) :
                <Container className="spinner-container" fluid>
                    <Spinner variant="primary" animation="border" />
                </Container>}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        ideas: state.idea.ideas,
        nextIdeas: state.idea.nextIdeas,
        prevIdeas: state.idea.prevIdeas,
        loading: state.idea.loading,
        ideaSaved: state.idea.ideaSaved
    };
};

export default connect(mapStateToProps, { getIdeas })(IdeaList);
