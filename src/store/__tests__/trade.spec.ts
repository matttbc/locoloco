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
        register: {
          userDetails: {
            firstName: '',
            lastName: '',
            role: '',
            phone: '',
          },
          businessDetails: {
            name: '',
            postcode: '',
            offerType: [],
            cuisineType: [],
            address: {
              street: '',
              number: '',
              city: '',
              county: '',
            },
            phone: '',
            website: '',
            logo: '',
            image: '',
            openFor: [],
            openDays: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
          },
          deliveryDetails: {
            deliveryOptions: [],
            minimumOrder: '',
            deliveryCharge: '',
            acceptedPostcodes: [],
          },
          paymentDetails: {
            type: [],
            stripe: {
              key: '',
              secret: '',
            },
          },
        },
      });
    });
  });
});
