import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from '@material-ui/core';

import BusinessRegistration from '..';
import UserDetailsForm from '../../../containers/user-details-form';
import BusinessInfoForm from '../../../containers/business-info-form';
import BusinessDetailsForm from '../../../containers/business-details-form';

describe('BusinessRegistration page component', () => {
  describe('render', () => {
    it('should render the proper step component', () => {
      const wrapper = shallow(<BusinessRegistration />);
      let form = wrapper.find(UserDetailsForm);
      expect(form.length).toEqual(1);

      form.props().goToNextStep();
      form = wrapper.find(BusinessInfoForm);
      expect(form.length).toEqual(1);

      form.props().goToNextStep();
      form = wrapper.find(BusinessDetailsForm);
      expect(form.length).toEqual(1);
    });

    it('should render a LinearProgress component', () => {
      const wrapper = shallow(<BusinessRegistration />);
      wrapper.find(UserDetailsForm).props().goToNextStep();
      expect(wrapper.find(LinearProgress).props().value).toEqual(33);
    });
  });
});
