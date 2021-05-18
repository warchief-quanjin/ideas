import Login from './components/login/Login';
import IdeaPage from './components/idea/IdeaPage';
import { connect } from "react-redux";
import './styles/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
    <div className="App">
      {props.logged ?
        <IdeaPage /> :
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

export default connect(mapStateToProps, {})(App);
