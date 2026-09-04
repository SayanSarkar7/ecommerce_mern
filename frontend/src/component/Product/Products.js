import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, clearError } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { Slider, Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footware",
  "Bottom",
  "Top",
  "Electronics",
  "Camera",
  "Smartphone",
  "AC",
  "Air Cooler",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 30000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    loading,
    products,
    productCount,
    error,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings, error));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Products -- ECOMMERCE_MERN" />
          <div className="productContainer">
            <h2 className="productsHeading">Products</h2>
            <div className="products">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>

            <div className="filterBox">
              <Typography>
                Price:
                {/* ₹{price[0]} to ₹{price[1]} */}
              </Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={30000}
              />
              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <fieldset>
                <Typography component="legend">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </fieldset>
            </div>

            {products && products.length > 0 ? (
              <Fragment>
                {resultPerPage < count && (
                  <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </Fragment>
            ) : (
              <h2 className="noProduct">No Products Found</h2>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
