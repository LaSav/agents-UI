import { createSlice } from '@reduxjs/toolkit';
import { fetchWorkflows } from './workflowsAPI';

const workflowSlice = createSlice({
  name: 'workflows',
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
        state.workflows = action.payload;
      })
      .addCase(fetchWorkflows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default workflowSlice.reducer;
