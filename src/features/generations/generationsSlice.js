import { createSlice } from '@reduxjs/toolkit';
import { fetchGenerations } from './generationsAPI';

const generationSlice = createSlice({
  name: 'generations',
  initialState: {
    generations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenerations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenerations.fulfilled, (state, action) => {
        state.loading = false;
        state.generations = action.payload;
      })
      .addCase(fetchGenerations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default generationSlice.reducer;
