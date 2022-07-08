import { configureStore } from '@reduxjs/toolkit';
import weightsSliceReducer from '../features/weights/weightsSlice';
import statusSliceReducer from '../features/status/statusSlice.js'
export const store = configureStore({
  reducer: {
    weights: weightsSliceReducer,
    status: statusSliceReducer,
  },
});