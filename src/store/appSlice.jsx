import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "elementsStatus",
  initialState: {
    status1: true,
  },
  reducers: {
    writeSomething: () => {
      console.log("something");
    },
  },
});

export const { writeSomething } = appSlice.actions;
export default appSlice.reducer;
