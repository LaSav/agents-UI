import { configureStore } from '@reduxjs/toolkit';
import workflowReducer from '../features/workflows/workflowsSlice';
import generationReducer from '../features/generations/generationsSlice';

export const store = configureStore({
  reducer: {
    workflows: workflowReducer,
    generations: generationReducer,
  },
});
