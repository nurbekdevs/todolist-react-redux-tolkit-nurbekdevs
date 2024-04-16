import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

const reducer = {
  tasks: tasksReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
