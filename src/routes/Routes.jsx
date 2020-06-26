import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./app";
import Things from "./things";


const Routes = () => (
  <App>
    <Switch>
      <Route path="/things" component={Things} />
    </Switch>
  </App>
);

export default Routes;
