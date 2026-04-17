import { createAsyncThunk } from '@reduxjs/toolkit';
import { aiApi } from '../../service/aiApi';

export const fetchAiResponse = createAsyncThunk<string, string>(
  'ai/fetch',
  async (prompt: string) => {
    return await aiApi.fetchResponse(prompt);
  },
);
