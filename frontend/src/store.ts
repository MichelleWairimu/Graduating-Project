import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import { loadStates, saveState } from "./utils";

const persistedState = loadStates()

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
})

store.subscribe(()=> {
    saveState(store.getState())
})

export default store