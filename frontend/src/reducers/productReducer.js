import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
} from "../constants/productConstants";

export const productReducer =
  ((state = { products: [] }),
  (action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
        return {
          loading: true,
          product: [],
        };
      case ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          product: action.payload.products,
          productsCount: action.payload.productsCount,
        };
      case ALL_PRODUCT_FAIL:
        return {
          loading: flase,
          product: action.payload,
        };

      default:
        return state;
    }
  });
