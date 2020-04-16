import React from 'react';
import { shallow } from 'enzyme';
import {
  FormLabel,
  FormHelperText,
} from '@material-ui/core';

import FileSelectField from '..';

describe('FileSelectField component', () => {
  let renderProps;
  let wrapper;

  beforeEach(() => {
    renderProps = {
      field: {
        name: 'file',
      },
      form: {
        touched: {},
        errors: {},
        setFieldTouched: jest.fn(),
        setFieldValue: jest.fn(),
      },
      type: 'file',
      disabled: false,
      accept: 'image/*',
      multiple: false,
    };
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a file input', () => {
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find('input').props()).toMatchObject({
        id: renderProps.field.name,
        name: renderProps.field.name,
        type: renderProps.type,
        accept: renderProps.accept,
        disabled: renderProps.disabled,
        multiple: renderProps.multiple,
      });
    });

    it('should render a label', () => {
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find(FormLabel).length).toEqual(1);
    });

    it('should render an helper text if helpText prop value is defined', () => {
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.helpText = 'Help';
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(renderProps.helpText);
    });

    it('should render an error if form field is touched and field error is defined', () => {
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.touched[renderProps.field.name] = true;
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find(FormHelperText).length).toEqual(0);

      renderProps.form.errors[renderProps.field.name] = 'Field error.';
      wrapper = shallow(<FileSelectField {...renderProps} />);
      expect(wrapper.find(FormHelperText).text()).toEqual(
        renderProps.form.errors[renderProps.field.name],
      );
    });
  });

  describe('events handlers', () => {
    describe('onChange', () => {
      it('should set form field touched prop to true', () => {
        wrapper = shallow(<FileSelectField {...renderProps} />);
        const evt = {
          preventDefault: jest.fn(),
          target: {
            files: [],
          },
        };
        wrapper.find('input').props().onChange(evt);
        expect(renderProps.form.setFieldTouched).toHaveBeenCalledWith(
          renderProps.field.name,
          true,
          false,
        );
      });

      it('should set the form field value if event target file is defined', () => {
        wrapper = shallow(<FileSelectField {...renderProps} />);
        const evt = {
          preventDefault: jest.fn(),
          target: {
            files: [
              {
                size: 100000,
                name: 'file',
              },
            ],
          },
        };
        wrapper.find('input').props().onChange(evt);
        expect(renderProps.form.setFieldValue).toHaveBeenCalledWith(
          renderProps.field.name,
          evt.target.files[0],
        );
      });
    });
  });
});
