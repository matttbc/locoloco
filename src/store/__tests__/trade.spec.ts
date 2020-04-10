import createTradeStore from '../trade';

jest.mock('mobx-react', () => ({
  useLocalStore: jest.fn().mockImplementation((callback) => callback()),
}));

describe('Trade store', () => {
  let trade;

  beforeEach(() => {
    trade = createTradeStore();
  });

  describe('props', () => {
    it('should have the proper attributes', () => {
      expect(trade).toMatchObject({
        name: '',
      });
    });
  });
});
