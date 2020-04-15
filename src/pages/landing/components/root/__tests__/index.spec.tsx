import React from 'react';
import { shallow } from 'enzyme';

import Landing from '..';
import RegisterForm from '../../../containers/register-form';

describe('Landing page component', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a RegisterForm container', () => {
      wrapper = shallow(<Landing />);
      expect(wrapper.find(RegisterForm).length).toEqual(1);
    });
  });
});
