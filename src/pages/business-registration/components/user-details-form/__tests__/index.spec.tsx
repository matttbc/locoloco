import React from 'react';
import { FormikProps } from 'formik';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import UserDetailsFormForm, { Values } from '..';

describe('UserDetailsForm component', () => {
  const renderProps = {};
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a firstName text field', () => {
      wrapper = shallow(<UserDetailsFormForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        name: 'firstName',
        type: 'text',
      });
    });

    it('should render a lastName text field', () => {
      wrapper = shallow(<UserDetailsFormForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        name: 'lastName',
        type: 'text',
      });
    });

    it('should render a role select field', () => {
      wrapper = shallow(<UserDetailsFormForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(2).props()).toMatchObject({
        name: 'role',
        type: 'select',
        options: [
          { value: 'owner', text: 'Owner' },
          { value: 'manager', text: 'Manager' },
        ],
      });
    });

    it('should render a phone text field', () => {
      wrapper = shallow(<UserDetailsFormForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(3).props()).toMatchObject({
        name: 'phone',
        type: 'text',
      });
    });

    it('should render a submit button', () => {
      wrapper = shallow(<UserDetailsFormForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
