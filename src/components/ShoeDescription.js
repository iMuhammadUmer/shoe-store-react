import React from "react";
import "../App.css";
import shoeImg from "../images/men-shoe1.png";

export const ShoeDescription = () => {
  return (
    <div class="showDescription">
      <div class="col">Show discription and price</div>
      <img src={shoeImg} alt="shoeimage" />
      <div class="col">shoe images</div>
    </div>
  );
};
