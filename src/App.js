import React from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import PublicRoute from './routes/PublicRoute';
import LoginDialog from './pages/login';

function App(props) {
  return (
    <div className="app-container">
      <Switch>
        <Redirect exact from="/" to="/login" />
        <PublicRoute exact path="/login" props={props} />
        <PublicRoute exact path="/homepage" component={LoginDialog} props={props} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
