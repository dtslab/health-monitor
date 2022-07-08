import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: 67,
  BMI: 0,
  goalWeight: 160,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    editHeight: (state, action) => {
      return (state.height = action.payload);
    },
    editWeight: (state, action) => {
      return (state.Weight = action.payload);
    },
    editBMI: (state, action) => {
      return (state.BMI = action.payload);
    },
    editGoalWeight: (state, action) => {
      return (state.goalWeight = action.payload);
    },
    editStatus: (state, action) => {
      return (state = {
        height: action.payload.height,
        BMI: action.payload.BMI,
        goalWeight: action.payload.goalWeight,
      });
    },
  },
});
export const { editHeight, editWeight, editBMI, editGoalWeight, editStatus } =
  statusSlice.actions;

  export const selectStatus = (state) => state.status;

export default statusSlice.reducer;
