import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

import IdeaElement from './IdeaElement'
import { getIdeas, getUsers } from "../../redux/actions";

import '../../styles/Idea.scss';

const IdeaList = (props) => {
    const { ideas, users, ideaSaved, loading, nextIdeas, prevIdeas, getIdeas, getUsers } = props;

    const [page, setPage] = useState(1);
    const [ideasList, setIdeasList] = useState([]);

    useEffect(() => {
        getIdeas(page)
    }, [])

    useEffect(() => {
        const unique = [];
        ideas.forEach(idea => {
            if (!unique.includes(idea.user_id)) {
                unique.push(idea.user_id)
            }
        });

        setIdeasList(ideas);
        if (unique.length > 0)
            getUsers(unique)
    }, [ideas])

    useEffect(() => {
        const ideasWithUser = [];

        ideas.forEach(idea => {
            const ideaUser = users.find((user) => user.id === idea.user_id)

            idea.username = ideaUser ? ideaUser.name : "No se encontro el usuario"
            ideasWithUser.push(idea)
        });

        setIdeasList(ideasWithUser);
    }, [users])

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
                ideasList.map((idea, key) =>
                    <IdeaElement idea={idea} key={key} />) :
                <Container className="spinner-container" fluid>
                    <Spinner variant="primary" animation="border" />
                </Container>}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        users: state.idea.users,
        ideas: state.idea.ideas,
        nextIdeas: state.idea.nextIdeas,
        prevIdeas: state.idea.prevIdeas,
        loading: state.idea.loading,
        ideaSaved: state.idea.ideaSaved
    };
};

export default connect(mapStateToProps, { getIdeas, getUsers })(IdeaList);
