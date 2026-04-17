import { createSlice } from '@reduxjs/toolkit';
import { fetchAiResponse } from './aiThunk';
import { AiState } from './types';

const initialState: AiState = {
  response: '',
  loading: false,
  error: '',
};

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAiResponse.pending, state => {
        state.loading = true;
        state.error = '';
        state.response = '';
      })
      .addCase(fetchAiResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(fetchAiResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const aiReducer = aiSlice.reducer;
