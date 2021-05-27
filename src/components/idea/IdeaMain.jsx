import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Login from '../login/Login';
import IdeaPage from './IdeaPage';
import { getLoggedUser } from "../../redux/actions";

const IdeaMain = (props) => {
    const { logged, getLoggedUser } = props;

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if (token)
            getLoggedUser()
    }, [])

    return (
        <div>
            {logged ?
                <IdeaPage /> :
                <Login />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        logged: state.login.logged
    };
};

export default connect(mapStateToProps, { getLoggedUser })(IdeaMain);
