import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer } from './reducers/productReducer';
import { getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
//import { getSlideTwoProductsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
    //getSlideTwoProducts:getSlideTwoProductsReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

