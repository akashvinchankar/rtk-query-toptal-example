import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Repositories from './features/repositories/Repositories';

const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Repositories />
      </Route>
    </Switch>
  );
};

export default Dashboard;
