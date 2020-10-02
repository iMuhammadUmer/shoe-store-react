import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Shoes from "./../data.json";
// import pageNotFound from ".././images/pageNotFound.svg";

export const ShoeDescription = () => {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) {
    return <h1>page not found</h1>;
    // return <img src={pageNotFound} alt="error404" />;
  }
  return (
    <body>
      <div class="showDescription">
        <div class="col">
          <h1 id="shoeName">{shoe.name}</h1>
          <p>{shoe.description}</p>
          <p id="price">${shoe.price}</p>
          <Link to="/shopping-cart" className={"link"}>
            <button id="btnAddToCart">Add to Cart</button>
          </Link>
        </div>
        <img src={shoe.img} alt={shoe.name} />
        {/* <div class="col">shoe images</div> */}
      </div>
    </body>
  );
};
