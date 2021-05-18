import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';

import { addIdea } from "../../redux/actions";

import '../../styles/Idea.scss';

const ShareIdea = (props) => {
    const { ideaSaved } = props;

    const [idea, setIdea] = useState("")

    useEffect(() => {
        if (ideaSaved)
            setIdea("")
    }, [ideaSaved])

    const saveIdea = () => {
        const { addIdea } = props;

        const payload = {
            body: idea
        }

        addIdea(payload)
    }

    return (
        <Container fluid>
            <h3 className="login-title">Comparte tu idea</h3>
            <FormControl onChange={(e) => setIdea(e.target.value)} value={idea} as="textarea" rows="5" aria-label="Share idea" />
            <div className="align-right">
                <Button onClick={saveIdea} className="share-button" variant="default">
                    Share
                </Button>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return { 
        ideaSaved: state.idea.ideaSaved
     };
};

export default connect(mapStateToProps, { addIdea })(ShareIdea);
