import handleCart from "./handleCart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
      handleCart : handleCart
})

export default rootReducer