import { combineReducers } from "redux";
import bannerReducers from "./bannerReducers";
import kategoryReducers from "./kategoryReducers";
import productReducers from "./productReducers";

const reducer = combineReducers({
    bannerReducers,
    kategoryReducers,
    productReducers
})

export default reducer;