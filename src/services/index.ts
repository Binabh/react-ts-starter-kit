import axios from 'axios';
import { BASE_API } from 'constants/';

export const api = axios.create(BASE_API);
