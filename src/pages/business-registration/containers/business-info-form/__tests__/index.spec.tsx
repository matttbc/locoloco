import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import BusinessInfoForm from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('BusinessInfoForm container', () => {
  let wrapper;
  let renderProps;
  let trade;
  const mockedUseStore = mocked(useStore);

  beforeEach(() => {
    renderProps = {
      goToNextStep: jest.fn(),
    };
    trade = {
      register: {
        businessDetails: {
          name: 'PizzaHouse',
          postcode: 'nw1 8xl',
          offerType: ['pantry'],
          cuisineType: ['japanese'],
        },
      },
    };
    mockedUseStore.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a BusinessInfoForm component', () => {
      mockedUseStore.mockReturnValue({ trade });
      wrapper = mount(<BusinessInfoForm {...renderProps} />);
      expect(wrapper.find('BusinessInfoForm').length).toEqual(1);
    });
  });

  describe('form', () => {
    describe('initial values', () => {
      it('should set the initial values from the store', () => {
        mockedUseStore.mockReturnValue({ trade });
        wrapper = mount(<BusinessInfoForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        expect(props.initialValues).toMatchObject({
          name: trade.register.businessDetails.name,
          postcode: trade.register.businessDetails.postcode,
          offerType: trade.register.businessDetails.offerType,
          cuisineType: trade.register.businessDetails.cuisineType,
        });
      });
    });

    describe('submit', () => {
      it('should set store register business details props and call goToNextStep prop', () => {
        mockedUseStore.mockReturnValue({ trade });
        wrapper = mount(<BusinessInfoForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        const values = {
          name: 'PizzaHot',
          postcode: 'nw1 0th',
          offerType: ['delivery'],
          cuisineType: ['chinese'],
        };
        props.onSubmit(values);
        expect(trade.register.businessDetails).toMatchObject(values);
        expect(renderProps.goToNextStep).toHaveBeenCalled();
      });
    });
  });
});
