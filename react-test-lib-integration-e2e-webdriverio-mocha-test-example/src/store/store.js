import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counter from "./reducers/counter";

const rootReducer = combineReducers({
    counter: counter,
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })
}