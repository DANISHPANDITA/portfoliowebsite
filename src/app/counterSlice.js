/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "portfolioSite",
  initialState: {
    navSelection: null,
  },
  reducers: {
    changeNavSelection: (state, action) => {
      state.navSelection = action.payload;
    },
    resetNavSelections: (state) => {
      state.navSelection = null;
    },
  },
});

export const { changeNavSelection, resetNavSelections } = counterSlice.actions;
export const selectNavSelection = (state) => state.portfolioSite.navSelection;

export default counterSlice.reducer;
