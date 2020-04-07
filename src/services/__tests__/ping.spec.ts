import axios from 'axios';
import { ping } from '../ping';

jest.mock('axios');

describe('Ping services', () => {
  describe('ping', () => {
    it('should do a get request to the /ping endpoint', () => {
      ping();
      expect(axios.get).toHaveBeenCalledWith('/ping');
    });
  });
});
