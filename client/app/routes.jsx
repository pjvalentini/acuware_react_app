import React from "react";
import { Route } from "react-router-dom";
import { Switch, BrowserRouter } from "react-router-dom";


// Children
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";

import PageNotFound from "./components/PageNotFound";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/login" component={SignIn} />
    	<Route path="/sign-up" component={SignUp} />
    	<Route path="/home" component={UserHome} />
    	<Route path="*" component={PageNotFound} />
    </Switch>
);
