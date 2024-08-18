import axios from 'axios';
import { endPoints } from './ENV';

const baseURL = 'https://dynomo.onrender.com/api/';

const Headers = {
  Header: {
    'Content-Type': 'application/json',
  },
  Header2: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};

const createApi = () => {
  const instance = axios.create({
    baseURL,
    headers: Headers.Header,
  });

  instance.interceptors.request.use(async config => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ2MDI3MjAzNTA4YmNlYWNkYTJiOGEiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MjM0NTk4NjB9.-tDkI_ZlzaiY4LV_2yPTmnDIvOF9u80wk9vudalBmE8';
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  });

  const get = url => {
    return instance.get(url);
  };

  return { get };
};

const ApiRequest = async data => {
  const result = await axios.post(endPoints.BASE_URL, data, {
    headers: Headers.Header2,
  });
  return result;
};

export const { get } = createApi();
export default ApiRequest;
