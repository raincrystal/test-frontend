import React from 'react';
import {
  Switch, withRouter, Redirect,
} from 'react-router-dom';

import './App.css';
import PublicRoute from './routes/PublicRoute';
import Login from './pages/login';
import Homepage from './pages/home';

function App(props) {
  return (
    <div className="app-container">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <PublicRoute exact path="/login" component={Login} props={props} />
        <PublicRoute exact path="/homepage" component={Homepage} props={props} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
