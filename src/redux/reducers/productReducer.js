// import * as actionTypess from '../constants/productConstant'

// export const getProductsReducer = (state = {products:[]},action)=>{
//     switch(action.type){
//         case actionTypess.GET_PRODUCTS_SUCCESS:
//             return ({products:action.payload})
//         case actionTypess.GET_PRODUCTS_FAIL:
//             return ({error:action.payload})
//         default:
//             return state
//     }
// }

import * as actionTypes from '../constants/productConstant'

export const getProductsReducer = (state = {products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return ({products:action.payload})
        case actionTypes.GET_PRODUCTS_FAIL:
            return ({error:action.payload})
        default:
            return state
    }
}

// export const getSlideTwoProductsReducer = (state = {slideTwoProducts:[]},action)=>{
//     switch(action.type){
//         case actionTypes.GET_SLIDETWOPRODUCTS_SUCCESS:
//             return ({slideTwoProducts:action.payload})
//         case actionTypes.GET_SLIDETWOPRODUCTS_FAIL:
//             return({error:action.payload})
//         default:
//             return state
//     }
// }

export const getProductDetailsReducer = (state = {product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PROUDCT_DETAILS_REQUEST:
            return {loading:true}
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return{loading:false,product:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return{loading:false,error:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return{product:{}}
        default:
            return state
    }
}
