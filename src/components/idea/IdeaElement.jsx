import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import { PersonFill } from 'react-bootstrap-icons';
import moment from 'moment';

import '../../styles/Idea.scss';

const IdeaElement = (props) => {
    const { idea } = props;

    return (
        <Row>
            <Col style={{ margin: '10px 0px' }}>
                <PersonFill className="person-icon" />
            </Col>
            <Col xs={12} md={11}>
                <FormControl className="idea-area" as="textarea" disabled rows={5} value={idea.body} aria-label="Share idea" />
                <h6 className="idea-footer">{`${moment(idea.created_at).format('DD/MM/YY')} `}</h6>
            </Col>
        </Row >
    )
}

export default IdeaElement;
