import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import PaymentDetailsForm, { Values } from '..';

describe('PaymentDetailsForm component', () => {
  let renderProps;
  let wrapper;

  beforeEach(() => {
    renderProps = {
      values: {
        type: [],
      },
    };
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a type checkbox group field', () => {
      wrapper = shallow(<PaymentDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        name: 'type',
        type: 'checkboxGroup',
        options: [
          { label: 'Cash', value: 'cash' },
          { label: 'Online payment', value: 'online' },
        ],
      });
    });

    it('should render a stripe key and secret fields if type value includes "online"', () => {
      renderProps.values.type = ['online'];
      wrapper = shallow(<PaymentDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        name: 'stripe.key',
        type: 'text',
      });

      expect(wrapper.find('FormField').at(2).props()).toMatchObject({
        name: 'stripe.secret',
        type: 'text',
      });
    });

    it('should render a submit button', () => {
      wrapper = shallow(<PaymentDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
