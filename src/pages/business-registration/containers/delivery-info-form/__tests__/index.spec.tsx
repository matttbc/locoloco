import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import DeliveryInfoForm from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('DeliveryInfoForm container', () => {
  let renderProps;
  let trade;
  const mockedUseStore = mocked(useStore);

  beforeEach(() => {
    renderProps = {
      goToNextStep: jest.fn(),
    };
    trade = {
      register: {
        deliveryDetails: {
          deliveryOptions: ['localDelivery'],
          minimumOrder: '10.00',
          deliveryCharge: '3.50',
          acceptedPostcodes: ['N22', 'N7'],
        },
      },
    };
    mockedUseStore.mockClear();
  });

  describe('render', () => {
    it('should render a DeliveryInfoForm component', () => {
      mockedUseStore.mockReturnValue({ trade });
      const wrapper = mount(<DeliveryInfoForm {...renderProps} />);
      expect(wrapper.find('DeliveryInfoForm').length).toEqual(1);
    });
  });

  describe('form', () => {
    describe('initial values', () => {
      it('should set the initial values from the store', () => {
        mockedUseStore.mockReturnValue({ trade });
        const wrapper = mount(<DeliveryInfoForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        expect(props.initialValues).toMatchObject({
          deliveryOptions: trade.register.deliveryDetails.deliveryOptions,
          minimumOrder: trade.register.deliveryDetails.minimumOrder,
          deliveryCharge: trade.register.deliveryDetails.deliveryCharge,
          acceptedPostcodes: trade.register.deliveryDetails.acceptedPostcodes,
        });
      });
    });

    describe('submit', () => {
      it('should set store register delivery info props and call goToNextStep prop', () => {
        mockedUseStore.mockReturnValue({ trade });
        const wrapper = mount(<DeliveryInfoForm {...renderProps} />);
        const props = wrapper.find(Formik).props() as any;
        const values = {
          deliveryOptions: ['takeaway', 'localDelivery'],
          minimumOrder: '20.00',
          deliveryCharge: '2.50',
          acceptedPostcodes: 'N15, N8',
        };
        props.onSubmit(values);
        expect(trade.register.deliveryDetails).toMatchObject(values);
        expect(renderProps.goToNextStep).toHaveBeenCalled();
      });
    });
  });
});
