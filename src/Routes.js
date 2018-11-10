import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import AppliedRoute from "./components/Routes/AppliedRoute";
import Signup from "./containers/Signup/Signup";
import NewTask from "./containers/NewTask/NewTask";
import Tasks from "./containers/Tasks/Tasks";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Routes/UnauthenticatedRoute";
import Settings from "./containers/Settings/Settings";



export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
  <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
  <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
  <AuthenticatedRoute path="/tasks/new" exact component={NewTask} props={childProps} />
  <AuthenticatedRoute path="/tasks/:id" exact component={Tasks} props={childProps} />
  { /* Finally, catch all unmatched routes */ }
  <Route component={NotFound} />
</Switch>