import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import BusinessDetailsForm from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('BusinessDetailsForm container', () => {
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
      },
    };
    mockedUseStore.mockClear();
  });

  describe('render', () => {
    it('should render a BusinessDetailsForm component', () => {
      mockedUseStore.mockReturnValue({ trade });
      const wrapper = mount(<BusinessDetailsForm {...renderProps} />);
      expect(wrapper.find('BusinessDetailsForm').length).toEqual(1);
    });
  });

  describe('form', () => {
    describe('initial values', () => {
      it('should set the initial values from the store', () => {
        mockedUseStore.mockReturnValue({ trade });
        const wrapper = mount(<BusinessDetailsForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        expect(props.initialValues).toMatchObject({
          address: trade.register.businessDetails.address,
          phone: trade.register.businessDetails.phone,
          website: trade.register.businessDetails.website,
          openFor: trade.register.businessDetails.openFor,
          openDays: trade.register.businessDetails.openDays,
        });
      });
    });

    describe('submit', () => {
      it('should set store register business details props and call goToNextStep prop', () => {
        mockedUseStore.mockReturnValue({ trade });
        const wrapper = mount(<BusinessDetailsForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        const values = {
          address: {
            street: 'Royal College Street',
            number: '8',
            city: 'London',
            county: 'London',
          },
          phone: '07506433476',
          website: 'pizza-house.com',
          openFor: ['dinner'],
          openDays: ['sunday', 'saturday'],
        };
        props.onSubmit(values);
        expect(trade.register.businessDetails).toMatchObject(values);
        expect(renderProps.goToNextStep).toHaveBeenCalled();
      });
    });
  });
});
