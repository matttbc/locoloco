import React from 'react';
import { shallow, mount } from 'enzyme';
import { Field } from 'formik';

import FormField, { FieldWrapper } from '..';
import TextField from '../text-field';
import SelectField from '../select-field';
import CheckboxGroupField from '../checkbox-group';

describe('FormField component', () => {
  let renderProps;
  let wrapper;

  describe('render', () => {
    beforeEach(() => {
      renderProps = {
        type: 'text',
        name: 'username',
      };
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should render a FieldWrapper component wrapped in a formik Field component', () => {
      wrapper = shallow(<FormField {...renderProps} />);
      const fieldProps = wrapper.find(Field).props();
      expect(fieldProps.name).toEqual(renderProps.name);
      expect(fieldProps.component).toEqual(FieldWrapper);
    });

    it('should render a TextField component if type prop value is text', () => {
      wrapper = shallow(<FieldWrapper {...renderProps} />);
      expect(wrapper.find(TextField).length).toEqual(1);
    });

    it('should render a SelectField component if type prop value is select', () => {
      renderProps.type = 'select';
      wrapper = shallow(<FieldWrapper {...renderProps} />);
      expect(wrapper.find(SelectField).length).toEqual(1);
    });

    it('should render a CheckboxGroupField component if type prop value is checkboxGroup', () => {
      renderProps.type = 'checkboxGroup';
      wrapper = shallow(<FieldWrapper {...renderProps} />);
      expect(wrapper.find(CheckboxGroupField).length).toEqual(1);
    });
  });

  describe('unmount', () => {
    beforeEach(() => {
      renderProps = {
        type: 'text',
        field: {
          name: 'address.number',
        },
        form: {
          initialValues: {
            address: {
              number: '136',
            },
          },
          setFieldValue: jest.fn(),
          setFieldError: jest.fn(),
          setFieldTouched: jest.fn(),
        },
      };
    });

    it('should reset form field value, error and touched props', () => {
      wrapper = mount(<FieldWrapper {...renderProps} />);
      wrapper.unmount();
      expect(renderProps.form.setFieldValue).toHaveBeenCalledWith(
        renderProps.field.name,
        renderProps.form.initialValues.address.number,
      );
      expect(renderProps.form.setFieldError).toHaveBeenCalledWith(renderProps.field.name, '');
      expect(renderProps.form.setFieldTouched).toHaveBeenCalledWith(renderProps.field.name, false);
    });
  });
});
