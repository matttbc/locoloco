import React from 'react';
import { shallow } from 'enzyme';

import Landing from '..';

describe('Landing component', () => {
  describe('render', () => {
    it('should render', () => {
      expect(() => shallow(<Landing />)).not.toThrow();
    });
  });
});
