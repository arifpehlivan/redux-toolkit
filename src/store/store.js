import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./feature/login/LoginSlice";

const rootReducer = combineReducers({
    loginReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}