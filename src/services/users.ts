import { api } from 'src/services/';

export const getUser = (payload: string) => api.get(`/${payload}`);
