import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import BusinessInfoForm, { Values } from '..';

describe('BusinessInfoForm component', () => {
  const renderProps = {};
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a name text field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        name: 'name',
        type: 'text',
      });
    });

    it('should render a postcode text field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        name: 'postcode',
        type: 'text',
      });
    });

    it('should render offerType checkbox group field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(2).props()).toMatchObject({
        name: 'offerType',
        type: 'checkboxGroup',
        options: [
          { label: 'Takeaway', value: 'takeaway' },
          { label: 'Delivery', value: 'delivery' },
          { label: 'Pantry', value: 'pantry' },
        ],
      });
    });

    it('should render cuisineType checkbox group field', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(3).props()).toMatchObject({
        name: 'cuisineType',
        type: 'checkboxGroup',
        options: [
          { label: 'French', value: 'french' },
          { label: 'Italian', value: 'italian' },
          { label: 'Japanese', value: 'japanese' },
          { label: 'Chinese', value: 'chinese' },
        ],
      });
    });

    it('should render a submit button', () => {
      wrapper = shallow(<BusinessInfoForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
