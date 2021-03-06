import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import PaymentDetailsForm from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('PaymentDetailsForm container', () => {
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
        paymentDetails: {
          type: ['cash'],
          stripe: {
            key: '',
            secret: '',
          },
        },
      },
    };
    mockedUseStore.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a PaymentDetailsForm component', () => {
      mockedUseStore.mockReturnValue({ trade });
      wrapper = mount(<PaymentDetailsForm {...renderProps} />);
      expect(wrapper.find('PaymentDetailsForm').length).toEqual(1);
    });
  });

  describe('form', () => {
    describe('initial values', () => {
      it('should set the initial values from the store', () => {
        mockedUseStore.mockReturnValue({ trade });
        wrapper = mount(<PaymentDetailsForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        expect(props.initialValues).toMatchObject({
          type: trade.register.paymentDetails.type,
          stripe: trade.register.paymentDetails.stripe,
        });
      });
    });

    describe('submit', () => {
      it('should set store register payment details props and call goToNextStep prop', () => {
        mockedUseStore.mockReturnValue({ trade });
        wrapper = mount(<PaymentDetailsForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        const values = {
          type: ['cash', 'online'],
          stripe: {
            key: 'key123',
            secret: 'secret345',
          },
        };
        props.onSubmit(values);
        expect(trade.register.paymentDetails).toMatchObject(values);
        expect(renderProps.goToNextStep).toHaveBeenCalled();
      });
    });
  });
});
