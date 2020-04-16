import React from 'react';
import { shallow } from 'enzyme';
import { FormHelperText, TextField } from '@material-ui/core';

import TextFieldInput from '..';

describe('TextField component', () => {
  describe('render', () => {
    let renderProps;
    let wrapper;

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

    afterEach(() => {
      wrapper.unmount();
    });

    it('should render a TextField', () => {
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      const inputProps = wrapper.find(TextField).props();
      expect(inputProps.id).toEqual(renderProps.field.name);
      expect(inputProps.type).toEqual(renderProps.type);
      expect(inputProps.placeholder).toEqual(renderProps.placeholder);
      expect(inputProps.disabled).toEqual(renderProps.disabled);
    });

    it('should render a label if label prop value is defined', () => {
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      let inputProps = wrapper.find(TextField).props();
      expect(inputProps.label).toEqual('');

      renderProps.label = 'Username';
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      inputProps = wrapper.find(TextField).props();
      expect(inputProps.label).toEqual(renderProps.label);
    });

    it('should render an helper text if helpText prop value is defined', () => {
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.helpText = 'Help';
      wrapper = shallow(<TextFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(renderProps.helpText);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      wrapper = shallow(<TextFieldInput {...renderProps} />);
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
