import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import Product from "./Product.js"

const product={
  name:"blue shirt",
  images:[{url:"https://unsplash.com/photos/woman-in-seashore-ohiyigDmlYc"}],
  price:"₹599",
  _id:"kjskakk_sayan"
}

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product}/>
      </div>
    </Fragment>
  );
};

export default Home;
