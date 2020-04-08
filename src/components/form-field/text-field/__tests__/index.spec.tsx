import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';

import TextFieldInput from '..';

describe('TextField component', () => {
  describe('render', () => {
    let renderProps;

    beforeEach(() => {
      renderProps = {
        type: 'text',
        field: {
          name: 'username',
        },
        form: {
          touched: {},
          errors: {},
        },
        disabled: true,
        placeholder: 'username',
      };
    });

    it('should render a TextField', () => {
      const wrapper = shallow(<TextFieldInput {...renderProps} />);
      const inputProps = wrapper.find(TextField).props();
      expect(inputProps.id).toEqual(renderProps.field.name);
      expect(inputProps.type).toEqual(renderProps.type);
      expect(inputProps.placeholder).toEqual(renderProps.placeholder);
      expect(inputProps.disabled).toEqual(renderProps.disabled);
    });

    it('should render a label if label prop value is defined', () => {
      let wrapper = shallow(<TextFieldInput {...renderProps} />);
      let inputProps = wrapper.find(TextField).props();
      expect(inputProps.label).toEqual('');

      renderProps.label = 'Username';
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      inputProps = wrapper.find(TextField).props();
      expect(inputProps.label).toEqual(renderProps.label);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      let wrapper = shallow(<TextFieldInput {...renderProps} />);
      let inputProps = wrapper.find(TextField).props();
      expect(inputProps.helperText).toBeUndefined();

      renderProps.form.touched[renderProps.field.name] = true;
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      inputProps = wrapper.find(TextField).props();
      expect(inputProps.helperText).toBeUndefined();

      renderProps.form.errors[renderProps.field.name] = 'Field error.';
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      inputProps = wrapper.find(TextField).props();
      expect(inputProps.helperText).toEqual(renderProps.form.errors[renderProps.field.name]);
    });
  });
});
