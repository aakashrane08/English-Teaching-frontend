import { combineReducers } from "redux";
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import menuReducer from "../slices/menuSlice";
import courseReducer from "../slices/courseSlice"
import testReducer from "../slices/testSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    menu:menuReducer,
    course:courseReducer,
    test:testReducer
})

export default rootReducer