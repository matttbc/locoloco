import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';

import Review from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@store', () => ({
  axios: jest.fn(),
}));

describe('Review component', () => {
  let wrapper;
  let trade;
  const mockedUseStore = mocked(useStore);

  const session = {
    token: '',
    tokenType: '',
    email: '',
    username: '',
    set: jest.fn(),
    clear: jest.fn(),
  };

  beforeEach(() => {
    trade = {
      register: {
        userDetails: {
          firstName: 'John',
          lastName: 'Smith',
          role: 'owner',
          phone: '07545673466',
        },
        businessDetails: {
          name: '',
          postcode: '',
          offerType: ['pantry'],
          cuisineType: ['japanese'],
          address: {
            street: 'Regents Park Road',
            number: '145',
            city: 'London',
            county: 'London',
          },
          phone: '07506433476',
          website: 'pizza-house.com',
          openFor: ['lunch'],
          openDays: ['sunday'],
        },
        deliveryDetails: {
          deliveryOptions: ['localDelivery'],
          minimumOrder: '10.00',
          deliveryCharge: '3.50',
          acceptedPostcodes: ['N22', 'N7'],
        },
        paymentDetails: {
          type: ['cash'],
        },
      },
    };
    mockedUseStore.mockClear();
  });

  describe('render', () => {
    it('should render a submit button', () => {
      mockedUseStore.mockReturnValue({ trade, session });
      wrapper = shallow(<Review />);
      expect(wrapper.find(Button).length).toEqual(1);
    });
  });

  describe('submit', () => {
    it('should set store name props and redirect to the registration path', () => {
      mockedUseStore.mockReturnValue({ trade, session });
      wrapper = shallow(<Review />);
      const button = wrapper.find(Button);
      button.find('button').simulate('click');
      expect(axios.push).toHaveBeenCalledWith('/restaurants/create', trade.register);
    });
  });
});
