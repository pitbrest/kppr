import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import navReducer from "./navSlice";
import contactsReducer from "./contactsSlice/contactsSlice";

const store = configureStore({
  reducer: {
    appReducer: appReducer,
    navReducer: navReducer,
    contactsReducer: contactsReducer,
  },
});

export default store;
