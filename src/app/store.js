import { configureStore } from '@reduxjs/toolkit';
import workflowReducer from '../features/workflows/workflowsSlice';

export const store = configureStore({
  reducer: {
    workflows: workflowReducer,
  },
});
