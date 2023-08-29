import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   menu: false,
// };

const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    toggle: state => !state,
  },
});

export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;