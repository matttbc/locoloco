import React from 'react';
import { FormikProps } from 'formik';
import { Button, Typography } from '@material-ui/core';
import { shallow } from 'enzyme';

import LegalAcknowledgementForm, { Values } from '..';

describe('LegalAcknowledgementForm component', () => {
  const renderProps = {};
  let wrapper;

  describe('render', () => {
    it('should render legal text', () => {
      wrapper = shallow(<LegalAcknowledgementForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Typography).at(1).props().component).toEqual('p');
    });

    it('should render terms checkbox field', () => {
      wrapper = shallow(<LegalAcknowledgementForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(0).props()).toMatchObject({
        label: 'Terms & Conditions',
        labelLink: '/terms-and-conditions',
        name: 'terms',
        type: 'checkbox',
      });
    });

    it('should render privacyPolicy checkbox field', () => {
      wrapper = shallow(<LegalAcknowledgementForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find('FormField').at(1).props()).toMatchObject({
        label: 'Privacy Policy',
        labelLink: '/privacy-policy',
        name: 'privacyPolicy',
        type: 'checkbox',
      });
    });

    it('should render a submit button', () => {
      wrapper = shallow(<LegalAcknowledgementForm {...renderProps as FormikProps<Values>} />);
      expect(wrapper.find(Button).props()).toMatchObject({
        type: 'submit',
      });
    });
  });
});
