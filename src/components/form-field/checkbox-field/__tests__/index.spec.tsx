import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Checkbox,
  FormControlLabel,
  Link,
  FormHelperText,
} from '@material-ui/core';

import CheckboxFieldInput from '..';

describe('CheckboxField component', () => {
  describe('render', () => {
    let renderProps;
    let wrapper;

    beforeEach(() => {
      renderProps = {
        type: 'checkbox',
        field: {
          name: 'tandcs',
        },
        form: {
          touched: {},
          errors: {},
        },
        disabled: true,
      };
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should render a Checkbox', () => {
      wrapper = shallow(<CheckboxFieldInput {...renderProps} />);
      expect(wrapper.find(Checkbox).props()).toMatchObject({
        id: renderProps.field.name,
      });
    });

    it('should render a Checkbox with inputProps if label is set', () => {
      renderProps.label = 'label';
      wrapper = mount(<CheckboxFieldInput {...renderProps} />);
      expect(wrapper.find(Checkbox).props()).toMatchObject({
        id: renderProps.field.name,
        inputProps: { 'aria-label': renderProps.label },
      });
    });

    it('should render a label controlling a checkbox if label prop value is defined', () => {
      wrapper = mount(<CheckboxFieldInput {...renderProps} />);
      expect(wrapper.find(FormControlLabel).length).toEqual(0);
      wrapper.unmount();

      renderProps.label = 'Terms & Conditions';
      wrapper = mount(<CheckboxFieldInput {...renderProps} />);

      const formControlLabel = wrapper.find(FormControlLabel);
      expect(formControlLabel.props().label).toEqual(renderProps.label);
      expect(formControlLabel.find(Checkbox).props()).toMatchObject({
        id: renderProps.field.name,
      });
    });

    it('should render a Link within the label if label and labelLink prop values are defined', () => {
      renderProps.label = 'Terms & Conditions';
      renderProps.labelLink = '/terms-and-conditions';
      wrapper = mount(<CheckboxFieldInput {...renderProps} />);

      expect(wrapper.find(Link).length).toEqual(1);
      expect(wrapper.find(Link).props().href).toEqual(renderProps.labelLink);
      expect(wrapper.find(Link).props().children).toEqual(renderProps.label);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      wrapper = shallow(<CheckboxFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.touched[renderProps.field.name] = true;
      wrapper = shallow(<CheckboxFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.errors[renderProps.field.name] = 'Field error.';
      wrapper = shallow(<CheckboxFieldInput {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(
        renderProps.form.errors[renderProps.field.name],
      );
    });
  });
});
