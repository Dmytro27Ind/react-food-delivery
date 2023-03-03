import { combineReducers } from "redux";
import navReducer from "./navReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    nav: navReducer
})

export default rootReducer;