import axios from "axios"
import * as actionTypes from '../constants/cartConstants'


const URL = "http://localhost:8000";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/products`);
    const products = response.data;
    const product = products.find((p) => p.id === id);
    

    if (product) {
      dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...product, quantity } });
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};

export const clearCart = () => {
  return {
    type: actionTypes.CART_RESET
  };
};
