import axios from 'axios';
import { fetch } from '../ping';

jest.mock('axios');

describe('Ping services', () => {
  describe('fetch', () => {
    it('should do a get request to the /ping endpoint', () => {
      fetch();
      expect(axios.get).toHaveBeenCalledWith('/ping');
    });
  });
});
