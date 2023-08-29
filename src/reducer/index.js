import { combineReducers } from "redux";
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import menuReducer from "../slices/menuSlice";
import courseReducer from "../slices/courseSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    menu:menuReducer,
    course:courseReducer
})

export default rootReducer