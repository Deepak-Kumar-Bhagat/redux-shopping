import { productReducer, selectProductReducer } from "./product_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    allProducts:productReducer,
    product:selectProductReducer
})

export default rootReducer;  