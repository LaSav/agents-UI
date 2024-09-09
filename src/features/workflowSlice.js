import { createSlice } from '@reduxjs/toolkit';
import { fetchWorkflows } from './workflowApi';

const workflowSlice = createSlice({
  name: 'workflow',
  initialState: {
    workflows: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkflows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkflows.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchWorkflows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default workflowSlice.reducer;
