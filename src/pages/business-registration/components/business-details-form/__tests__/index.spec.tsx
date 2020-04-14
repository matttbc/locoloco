import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import BusinessDetailsForm, { Values } from '..';

describe('BusinessDetailsForm component', () => {
  const renderProps = {};

  describe('render', () => {
    it('should render a street address text field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        name: 'address.street',
        type: 'text',
      });
    });

    it('should render a house number address text field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        name: 'address.number',
        type: 'text',
      });
    });

    it('should render a city address text field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(2).props()).toMatchObject({
        name: 'address.city',
        type: 'text',
      });
    });

    it('should render a county address text field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(3).props()).toMatchObject({
        name: 'address.county',
        type: 'text',
      });
    });

    it('should render a phone text field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(4).props()).toMatchObject({
        name: 'phone',
        type: 'text',
      });
    });

    it('should render a website text field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(5).props()).toMatchObject({
        name: 'website',
        type: 'text',
      });
    });

    it('should render an openFor checkbox group field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(6).props()).toMatchObject({
        name: 'openFor',
        type: 'checkboxGroup',
        options: [
          { label: 'Breakfast', value: 'breakfast' },
          { label: 'Lunch', value: 'lunch' },
          { label: 'Dinner', value: 'dinner' },
        ],
      });
    });

    it('should render an openDays checkbox group field', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(7).props()).toMatchObject({
        name: 'openDays',
        type: 'checkboxGroup',
        options: [
          { label: 'Sunday', value: 'sunday' },
          { label: 'Monday', value: 'monday' },
          { label: 'Tuesday', value: 'tuesday' },
          { label: 'Wednesday', value: 'wednesday' },
          { label: 'Thursday', value: 'thursday' },
          { label: 'Friday', value: 'friday' },
          { label: 'Saturday', value: 'saturday' },
        ],
      });
    });

    it('should render a submit button', () => {
      const wrapper = shallow(<BusinessDetailsForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
