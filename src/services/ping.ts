import axios from 'axios';

export const PING_URL = '/ping';

export const fetch = (): Promise<any> => (
  axios.get(PING_URL)
);
