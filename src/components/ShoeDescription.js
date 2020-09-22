import React from "react";
import "../App.css";
import shoeImg from "../images/men-shoe1.png";

export const ShoeDescription = () => {
  return (
    <div class="showDescription">
      <div class="col">
        <h1 id="shoeName">nike react</h1>
        <p>description</p>
        <p id="price">$499</p>
      </div>
      <img src={shoeImg} alt="shoeimage" />
      <div class="col">shoe images</div>
    </div>
  );
};
