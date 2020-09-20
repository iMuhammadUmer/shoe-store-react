import React from "react";
import { Home } from "./components/Home.js";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={() => <h2>Error 404</h2>} />
        </Switch>
      </Router>
    </div>
  );
}
export default RouteConfig;
