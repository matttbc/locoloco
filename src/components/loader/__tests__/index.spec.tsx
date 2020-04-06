import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { shallow } from 'enzyme';

import Loader from '..';

describe('Loader component', () => {
  describe('render', () => {
    it('should render a spinner', () => {
      const wrapper = shallow(<Loader />);
      expect(wrapper.find(CircularProgress).length).toEqual(1);
    });
  });
});
