import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';

import BusinessRegistration from '..';
import Landing from '../../landing';
import UserDetailsForm from '../../../containers/user-details-form';
import BusinessInfoForm from '../../../containers/business-info-form';
import BusinessDetailsForm from '../../../containers/business-details-form';
import PaymentDetailsForm from '../../../containers/payment-details-form';

describe('BusinessRegistration page component', () => {
  describe('render', () => {
    it('should render the proper step component', () => {
      const wrapper = shallow(<BusinessRegistration />);
      let step = wrapper.find(Landing);
      expect(step.length).toEqual(1);

      step.props().goToNextStep();
      step = wrapper.find(UserDetailsForm);
      expect(step.length).toEqual(1);

      step.props().goToNextStep();
      step = wrapper.find(BusinessInfoForm);
      expect(step.length).toEqual(1);

      step.props().goToNextStep();
      step = wrapper.find(BusinessDetailsForm);
      expect(step.length).toEqual(1);

      step.props().goToNextStep();
      step = wrapper.find(PaymentDetailsForm);
      expect(step.length).toEqual(1);
    });

    it('should render a LinearProgress component', () => {
      const wrapper = shallow(<BusinessRegistration />);
      wrapper.find(Landing).props().goToNextStep();
      expect(wrapper.find(LinearProgress).props().value).toEqual(20);
    });
  });
});
