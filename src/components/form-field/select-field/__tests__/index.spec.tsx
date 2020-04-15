import React from 'react';
import { shallow } from 'enzyme';
import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

import SelectFieldInput from '..';

describe('SelectField component', () => {
  describe('render', () => {
    let renderProps;
    let wrapper;

    beforeEach(() => {
      renderProps = {
        field: {
          name: 'username',
        },
        form: {
          touched: {},
          errors: {},
        },
        disabled: true,
        options: [
          { text: 'Option 1', value: 1 },
          { text: 'Option 2', value: 2 },
        ],
      };
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should render a Select and a list of options', () => {
      wrapper = shallow(<SelectFieldInput {...renderProps} />);
      expect(wrapper.find(Select).props()).toMatchObject({
        id: renderProps.field.name,
      });
      expect(wrapper.find(FormControl).props()).toMatchObject({
        disabled: renderProps.disabled,
      });
      const options = wrapper.find('option');
      expect(options.length).toEqual(renderProps.options.length + 1);
      renderProps.options.forEach((option, index) => {
        const selectOption = options.at(index + 1);
        expect(selectOption.props()).toMatchObject({
          value: renderProps.options[index].value,
        });
        expect(selectOption.text()).toEqual(renderProps.options[index].text);
      });
    });

    it('should render a label if label prop value is defined', () => {
      wrapper = shallow(<SelectFieldInput {...renderProps} />);
      expect(wrapper.find(InputLabel).length).toEqual(0);

      renderProps.label = 'Role';
      wrapper = shallow(<SelectFieldInput {...renderProps} />);
      expect(wrapper.find(InputLabel).text()).toEqual(renderProps.label);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      wrapper = shallow(<SelectFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.touched[renderProps.field.name] = true;
      wrapper = shallow(<SelectFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.errors[renderProps.field.name] = 'Field error.';
      wrapper = shallow(<SelectFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(
        renderProps.form.errors[renderProps.field.name],
      );
    });
  });
});
