import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter : "",
  filterResumeData: "",
};

export const recentWorksSlice = createSlice({
  name: "recentWork",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.filter = action.payload;
    },
    filterResume: (state, action) => {
      state.filterResumeData = action.payload;
    },
  },
});

export const { filterData ,filterResume } = recentWorksSlice.actions;
const recentWorkReducer = recentWorksSlice.reducer;
export default recentWorkReducer;
