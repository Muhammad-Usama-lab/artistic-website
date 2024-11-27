// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import demoSlice from "./reducers/demoSlice";

const rootReducer = combineReducers({
  demo: demoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
