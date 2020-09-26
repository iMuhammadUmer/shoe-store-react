import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Shoes from "./../data.json";

export const ShoeDescription = () => {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) {
    return <h2>Product not found</h2>;
  }
  return (
    <div class="showDescription">
      <div class="col">
        <h1 id="shoeName">{shoe.name}</h1>
        <p>{shoe.description}</p>
        <p id="price">${shoe.price}</p>
      </div>
      <img src={shoe.img} alt="shoeimage" />
      {/* <div class="col">shoe images</div> */}
    </div>
  );
};
