import React from 'react';
import { shallow } from 'enzyme';

import Landing from '..';
import RegisterForm from '../../../containers/register-form';

describe('Landing page component', () => {
  describe('render', () => {
    it('should render a RegisterForm container', () => {
      const wrapper = shallow(<Landing />);
      expect(wrapper.find(RegisterForm).length).toEqual(1);
    });
  });
});
