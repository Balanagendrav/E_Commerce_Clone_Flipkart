
// import axios from "axios"
// import * as actionTypes from '../constants/productConstant'

// // const URL= "https://fakestoreapi.com/products"
// const URL = "http://localhost:8000/products"


// export const getProducts = () => async(dispatch)=>{
//     try{
//         const {data} = await axios.get(URL)
//         dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
//     }
//     catch(error){
//         dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
//     }

// }

import axios from 'axios'
import * as actionTypes from '../constants/productConstant'

const URL = "http://localhost:8000"

export const getProducts = ()=>async(dispatch)=>{
    try{
        const {data} = await axios.get(`${URL}/products`)
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
    }
}

// export const getSlideTwoProducts =()=> async(dispatch)=>{
//     try{
//         const {productdata} = await axios.get("http://localhost:8000/slideTwoProducts")
//         dispatch({type:acitonTypes.GET_SLIDETWOPRODUCTS_SUCCESS,payload:productdata})
//     }
//     catch(error){
//         dispatch({type:acitonTypes.GET_SLIDETWOPRODUCTS_FAIL,payload:error.message})
//     }
// }

// export const getProductDetails =(id)=> async(dispatch)=>{
//     try{
//         dispatch({type:acitonTypes.GET_PROUDCT_DETAILS_REQUEST})
//         const {data} = await axios.get(`${URL}/product/${id}`)
//         dispatch({type:acitonTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
//     }
//     catch(error){
//         dispatch({type:acitonTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
//     }
// }

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PROUDCT_DETAILS_REQUEST });

    // Fetch the products data from the json-server file using axios
    const response = await axios.get(`${URL}/products/`);
    const products = response.data;

    // Find the product with the matching id
    const product = products.find((p) => p.id === id);

    if (product) {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: product });
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

  
