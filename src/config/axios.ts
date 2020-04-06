import axios from 'axios';

type Options = {
  baseUrl: string;
}

export const setAuthorizationHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthorizationHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

export default ({ baseUrl }: Options) => {
  axios.defaults.baseURL = baseUrl;
};
