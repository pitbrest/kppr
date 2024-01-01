import { createSlice } from "@reduxjs/toolkit";
import { contacts } from "./contactsData";

const contactsSlice = createSlice({
  name: "navSlice",
  initialState: {
    contacts: contacts,
  },
});

export default contactsSlice.reducer;
