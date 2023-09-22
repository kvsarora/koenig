import { combineReducers } from "redux";
import counterReducer from "./CounterSlice";
import LoginSlice from "./LoginSlice";
const rootReducer=combineReducers({
    counter:counterReducer,
    LG:LoginSlice,
});

export default rootReducer;