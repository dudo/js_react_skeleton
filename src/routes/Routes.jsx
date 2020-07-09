import React from "react";
import { Route, Switch } from "react-router-dom";
import Things from "./things";


const Routes = () => (
  <Switch>
    <Route path="/things" component={Things} />
  </Switch>
);

export default Routes;
