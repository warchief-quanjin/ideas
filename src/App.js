import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from './components/common/NotFound';
import Layout from './components/layout/Layout';
import IdeaMain from './components/idea/IdeaMain';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/idea" component={IdeaMain} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
