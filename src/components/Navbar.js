import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export const Navbar = () => {
  return (
    <div>
      <Link to="/" className={"link"}>
        <img src={logo} alt="logo" />
      </Link>

      <Link to="/" className={"link"}>
        Men
      </Link>

      <Link to="/products" className={"link"}>
        Women
      </Link>

      <Link to="/about" className={"link"}>
        Kids
      </Link>
    </div>
  );
};
