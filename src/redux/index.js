import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const rootReduser = combineReducers({
    reducer
})

const store = configureStore({
    reducer: rootReduser
})


export default store