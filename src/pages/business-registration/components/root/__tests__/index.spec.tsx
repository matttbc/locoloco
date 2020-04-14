import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';

import BusinessRegistration from '..';
import UserDetailsForm from '../../../containers/user-details-form';
import BusinessInfoForm from '../../../containers/business-info-form';

describe('BusinessRegistration page component', () => {
  describe('render', () => {
    it('should render a UserDetailsForm container by default', () => {
      const wrapper = shallow(<BusinessRegistration />);
      expect(wrapper.find(UserDetailsForm).length).toEqual(1);
    });

    it('should render a BusinessInfoForm container as the second step', () => {
      const wrapper = shallow(<BusinessRegistration />);
      wrapper.find(UserDetailsForm).props().goToNextStep();
      expect(wrapper.find(BusinessInfoForm).length).toEqual(1);
    });

    it('should render a LinearProgress component', () => {
      const wrapper = shallow(<BusinessRegistration />);
      wrapper.find(UserDetailsForm).props().goToNextStep();
      expect(wrapper.find(LinearProgress).props().value).toEqual(50);
    });
  });
});
