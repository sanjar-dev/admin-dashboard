import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todos from "../pages/Todo/TodoSlice";

const reducer = combineReducers({
  todos,
});

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
