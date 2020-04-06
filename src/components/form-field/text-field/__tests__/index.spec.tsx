import React from 'react';
import { shallow } from 'enzyme';

import TextField from '..';

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

    it('should render a text input', () => {
      const wrapper = shallow(<TextField {...renderProps} />);
      const inputProps = wrapper.find('input').props();
      expect(inputProps.id).toEqual(renderProps.field.name);
      expect(inputProps.type).toEqual(renderProps.type);
      expect(inputProps.placeholder).toEqual(renderProps.placeholder);
      expect(inputProps.disabled).toEqual(renderProps.disabled);
    });

    it('should render a label if label prop value is defined', () => {
      let wrapper = shallow(<TextField {...renderProps} />);
      expect(wrapper.find('label').length).toEqual(0);

      renderProps.label = 'Username';
      wrapper = shallow(<TextField {...renderProps} />);
      const label = wrapper.find('label');
      const labelProps = label.props();
      expect(label.text()).toEqual(renderProps.label);
      expect(labelProps.htmlFor).toEqual(renderProps.field.name);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      let wrapper = shallow(<TextField {...renderProps} />);
      expect(wrapper.find('Message').length).toEqual(0);

      renderProps.form.touched[renderProps.field.name] = true;
      wrapper = shallow(<TextField {...renderProps} />);
      expect(wrapper.find('Message').length).toEqual(0);

      renderProps.form.errors[renderProps.field.name] = 'Username error.';
      wrapper = shallow(<TextField {...renderProps} />);
      expect(wrapper.find('Message').props()).toMatchObject({
        message: renderProps.form.errors[renderProps.field.name],
      });
    });
  });
});
