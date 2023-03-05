import { combineReducers } from "redux";
import tabsReducer from "./tabsReducer";

const rootReducer = combineReducers({
    tabs: tabsReducer
})

export default rootReducer;