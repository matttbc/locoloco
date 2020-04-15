import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import DeliveryInfoForm, { Values } from '..';

describe('DeliveryInfoForm component', () => {
  const renderProps = {};

  describe('render', () => {
    it('should render deliveryOptions checkbox group field', () => {
      const wrapper = shallow(<DeliveryInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        name: 'deliveryOptions',
        type: 'checkboxGroup',
        options: [
          { label: 'Takeaway', value: 'takeaway' },
          { label: 'Local Delivery', value: 'localDelivery' },
        ],
      });
    });

    it('should render a minimum order text field', () => {
      const wrapper = shallow(<DeliveryInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        name: 'minimumOrder',
        type: 'text',
      });
    });

    it('should render a delivery charge text field', () => {
      const wrapper = shallow(<DeliveryInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(2).props()).toMatchObject({
        name: 'deliveryCharge',
        type: 'text',
      });
    });

    it('should render a accepted postcodes text field', () => {
      const wrapper = shallow(<DeliveryInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(3).props()).toMatchObject({
        name: 'acceptedPostcodes',
        type: 'text',
      });
    });

    it('should render a submit button', () => {
      const wrapper = shallow(<DeliveryInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
