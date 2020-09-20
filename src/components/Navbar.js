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
              Men
            </Link>
          </li>

          <li>
            <Link to="/products" className={"link"}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/about" className={"link"}>
              Kids
            </Link>
          </li>
        </ul>
      </nav>
      <div class="rightSec">
        <input type="text" placeholder="Search" />
        <Link to="/shoppingCart" className={"link"}>
          <img src={shoppingBag} alt="shopping cart" />
        </Link>
      </div>
    </header>
  );
};
