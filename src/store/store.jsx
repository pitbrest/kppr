import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import navReducer from "./navSlice";

const store = configureStore({
  reducer: {
    appReducer: appReducer,
    navReducer: navReducer,
  },
});

export default store;
