import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import shoppingBag from "../images/shoppingBag.svg";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className={"link"}>
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className={"link"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" className={"link"}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className={"link"}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" className={"link"}>
              Kids
            </Link>
          </li>
        </ul>
      </nav>
      <div class="rightSec">
        <input type="text" placeholder="Search" />
        <Link to="/shopping-cart" className={"link"}>
          <img src={shoppingBag} alt="shopping cart" />
        </Link>
      </div>
    </header>
  );
};
