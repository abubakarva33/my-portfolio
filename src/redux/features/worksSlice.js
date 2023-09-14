import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter : ""
};

export const recentWorksSlice = createSlice({
  name: "recentWork",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterData } = recentWorksSlice.actions;
const recentWorkReducer = recentWorksSlice.reducer;
export default recentWorkReducer;
