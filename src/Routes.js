import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/Routes/AppliedRoute";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Routes/UnauthenticatedRoute";
import asyncComponent from "./components/AsyncComponent/AsyncComponent";

import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import NewTask from "./containers/NewTask/NewTask";
import Tasks from "./containers/Tasks/Tasks";
import Billing from "./containers/Billing/Billing";
import ResetPassword from "./containers/ResetPassword/ResetPassword"
import Settings from "./containers/Settings/Settings";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail/ChangeEmail";

const AsyncDummy = asyncComponent(() => import("./containers/Dummy/Dummy"));



export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
  <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
  <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} props={childProps}/>
  <AuthenticatedRoute path="/billing" exact component={Billing} props={childProps} />
  <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps}/>
  <AuthenticatedRoute path="/tasks/new" exact component={NewTask} props={childProps} />
  <AuthenticatedRoute path="/tasks/:id" exact component={Tasks} props={childProps} />
  <AuthenticatedRoute path="/settings/password" exact component={ChangePassword} props={childProps}/>
  <AuthenticatedRoute path="/settings/email" exact component={ChangeEmail} props={childProps}/>

  <AuthenticatedRoute path="/dummy" exact component={AsyncDummy} props={childProps}/>

  { /* Finally, catch all unmatched routes */ }
  <Route component={NotFound} />
</Switch>