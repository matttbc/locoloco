import React from 'react';
import { shallow } from 'enzyme';

import Header from '..';

describe('Header component', () => {
  describe('render', () => {
    it('should render', () => {
      expect(() => shallow(<Header />)).not.toThrow();
    });
  });
});
