import React from "react";
import { Home } from "./components/Home.js";
import { Men } from "./components/Men.js";
import { Women } from "./components/Women.js";
// import { Kids } from "./components/Kids.js";
import { ShoeDescription } from "./components/ShoeDescription.js";
import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "./components/ShoppingCart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/shoe-description" component={ShoeDescription} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route path="*" component={() => <h2>Error 404</h2>} />
        </Switch>
      </Router>
    </div>
  );
}
export default RouteConfig;
