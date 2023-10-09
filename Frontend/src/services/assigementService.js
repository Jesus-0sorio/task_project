import { api } from '../config/axios';

const BASE_URL = '/api/assignment';
const USER_ID = localStorage.getItem('userId');

export const assignmentsService = {
  getAll: async () => {
    const response = await api.get(BASE_URL);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post(BASE_URL, { ...data, user: USER_ID });
    return response.data;
  },
};
