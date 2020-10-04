import React from "react";
import "./App.css";
import { Home } from "./components/Home.js";
import { Men } from "./components/Men.js";
import { Women } from "./components/Women.js";
import { ShoeDescription } from "./components/ShoeDescription.js";
import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "./components/ShoppingCart";
import error from "./images/error404.svg";

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
          <Route
            exact
            path="/shoe-description/:id"
            component={ShoeDescription}
          />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route
            path="*"
            component={() => (
              <div className="flex">
                <img className="error" src={error} alt="Error 404" />
                <h1>Page not found</h1>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default RouteConfig;
