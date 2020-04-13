import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'formik';

import FormField from '..';
import TextField from '../text-field';
import SelectField from '../select-field';

describe('FormField component', () => {
  describe('render', () => {
    let renderProps;

    beforeEach(() => {
      renderProps = {
        type: 'text',
        name: 'username',
      };
    });

    it('should render a TextField component wrapped in a formik Field component'
      + ' if type prop value is text', () => {
      const wrapper = shallow(<FormField {...renderProps} />);
      const fieldProps = wrapper.find(Field).props();
      expect(fieldProps.name).toEqual(renderProps.name);
      expect(fieldProps.component).toEqual(TextField);
    });

    it('should render a SelectField component wrapped in a formik Field component'
      + ' if type prop value is select', () => {
      renderProps.type = 'select';
      const wrapper = shallow(<FormField {...renderProps} />);
      const fieldProps = wrapper.find(Field).props();
      expect(fieldProps.name).toEqual(renderProps.name);
      expect(fieldProps.component).toEqual(SelectField);
    });
  });
});
