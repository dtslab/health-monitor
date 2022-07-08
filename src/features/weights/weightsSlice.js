import { createSlice } from "@reduxjs/toolkit";

const weightsSlice = createSlice({
  name: "weights",
  initialState: [
    { id: 1, time: "3/1/1999", value: 190, note: "this is note" },
    { id: 2, time: "3/1/2004", value: 110, },
    { id: 4, time: "3/13/2018", value: 200, note:'ate too much for holidays' },
    { id: 5, time: "3/13/2019", value: 160, note:'after a week of working out'},
    { id: 6, time: "3/13/2020", value: 140, note: 'last measure' },
  ],
  reducers: {
    addWeight: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => new Date(a.time) - new Date(b.time));
    },
    removeWeight: (state, action) => {
      return (state = state.filter(
        (weight) => weight.id !== action.payload.id
      ));
    },
    sortWeight: (state) => {
      state.sort((a, b) => new Date(a.time) - new Date(b.time));
    },
  },
});

export const { addWeight, removeWeight, sortWeight } = weightsSlice.actions;
export const selectWeights = (state) => state.weights;

export default weightsSlice.reducer;
