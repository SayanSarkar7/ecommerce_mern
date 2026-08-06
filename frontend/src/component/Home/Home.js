import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import { getProduct } from "../../actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";

// const product = {
//   name: "blue shirt",
//   images: [
//     {
//       url: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ],
//   price: "₹599",
//   _id: "kjskakk_sayan",
// };

const Home = () => {
  const dispatch = useDispatch();
  const {loading,error,products,productsCount}=useSelector((state)=>{
   return state.products
  })
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title={"Ecommerce Mern"} />
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
        {products && products.map((product)=><Product key={product._id} product={product} />)}
      </div>
    </Fragment>
  );
};

export default Home;
