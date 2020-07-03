import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from "./../types";
import { tokenConfig } from "./../auth-actions/tokenConfig";
import axios from "axios";

export const addToCart = productId => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    let params = { productId };
    axios
      .get("/api/users/addToCart", tokenConfig(getState, params))
      .then(res => {
        let successMessage = res.data.message;
        let cart = res.data.user.cart;
        dispatch(addToCartSuccess(cart, successMessage));
        resolve(successMessage);
      })
      .catch(err => {
        console.log(err);

        let errorMessge = err.response.data.message;
        dispatch(addToCartFailure(errorMessge));
        reject(errorMessge);
      });
  });
};

const addToCartSuccess = (cart, message) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: { cart, message }
  };
};

const addToCartFailure = error => {
  return {
    type: ADD_TO_CART_FAILURE,
    payload: { error }
  };
};