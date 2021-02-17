import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Beauty from "../pages/Beauty";
import HomeandLiving from "../pages/HomeandLiving";
import Offer from "../pages/Offer";
import Navbar from "./Navbar";

const AppHeader = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/kids" component={Kids} />
        <Route exact path="/beauty" component={Beauty} />
        <Route exact path="/homeandLiving" component={HomeandLiving} />
        <Route exact path="/offer" component={Offer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default AppHeader;
