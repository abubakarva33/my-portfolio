import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const recentWorksSlice = createSlice({
  name: 'recentWork',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = recentWorksSlice.actions
const recentWorkReducer =recentWorksSlice.reducer;
export default recentWorkReducer;