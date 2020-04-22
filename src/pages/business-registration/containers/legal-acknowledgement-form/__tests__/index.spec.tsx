import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';

import LegalAcknowledgementForm from '..';

describe('LegalAcknowledgementFrom container', () => {
  let wrapper;
  let renderProps;

  beforeEach(() => {
    renderProps = {
      goToNextStep: jest.fn(),
    };
  });

  describe('render', () => {
    it('should render a BusinessInfoForm component', () => {
      wrapper = mount(<LegalAcknowledgementForm {...renderProps} />);
      expect(wrapper.find('LegalAcknowledgementForm').length).toEqual(1);
    });
  });

  describe('submit', () => {
    it('should set store register business details props and call goToNextStep prop', () => {
      wrapper = mount(<LegalAcknowledgementForm {...renderProps} />);
      const props = wrapper.find(Formik).props() as any;
      props.onSubmit();
      expect(renderProps.goToNextStep).toHaveBeenCalled();
    });
  });
});
