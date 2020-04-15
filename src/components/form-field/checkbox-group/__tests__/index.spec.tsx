import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormHelperText,
} from '@material-ui/core';

import CheckboxGroupInput from '..';

describe('CheckboxGroupInput component', () => {
  describe('render', () => {
    let renderProps;
    let wrapper;

    beforeEach(() => {
      renderProps = {
        field: {
          name: 'type',
        },
        form: {
          touched: {},
          errors: {},
          values: {
            type: [1],
          },
        },
        options: [
          { label: 'Option 1', value: 1, disabled: true },
          { label: 'Option 2', value: 2 },
        ],
      };
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should render a list of checkboxes', () => {
      wrapper = mount(<CheckboxGroupInput {...renderProps} />);
      const formControlLabels = wrapper.find(FormControlLabel);
      renderProps.options.forEach((option, index) => {
        const label = formControlLabels.at(index);
        expect(label.props()).toMatchObject({
          label: option.label,
        });
        expect(label.find(Checkbox).props()).toMatchObject({
          id: `${renderProps.field.name}.${index}`,
          value: option.value,
          disabled: !!option.disabled,
          checked: renderProps.form.values[renderProps.field.name].includes(option.value),
        });
      });
    });

    it('should render an helper text if helpText prop value is defined', () => {
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.helpText = 'Help';
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(renderProps.helpText);
    });

    it('should render a label if label prop value is defined', () => {
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormLabel).length).toEqual(0);

      renderProps.label = 'Role';
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormLabel).text()).toEqual(renderProps.label);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.touched[renderProps.field.name] = true;
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.errors[renderProps.field.name] = 'Field error.';
      wrapper = shallow(<CheckboxGroupInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(
        renderProps.form.errors[renderProps.field.name],
      );
    });
  });
});
