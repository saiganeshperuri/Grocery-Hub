import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://69c381d9b780a9ba03e6f8c3.mockapi.io',
  timeout: 5000,
});
