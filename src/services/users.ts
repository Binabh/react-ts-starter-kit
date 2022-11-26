import { api } from 'services/';

export const getUser = (payload: string) => api.get(`/users/${payload}`);
