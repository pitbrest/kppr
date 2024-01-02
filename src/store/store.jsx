import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    appReducer: appReducer,
  },
});

export default store;
