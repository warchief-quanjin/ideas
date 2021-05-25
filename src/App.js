import React, { useEffect } from 'react';
import Login from './components/login/Login';
import Layout from './components/layout/Layout';
// import IdeaPage from './components/idea/IdeaPage';
import { connect } from "react-redux";
import './styles/App.scss';

import { getLoggedUser } from "./redux/actions";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  const { getLoggedUser } = props;

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    if (token) {
      getLoggedUser()
    }
  }, [])

  return (
    <div className="App">
      {props.logged ?
        <Layout /> :
        <Login />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    logged: state.login.logged
  };
};

export default connect(mapStateToProps, { getLoggedUser })(App);
