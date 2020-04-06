import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

import Header from '..';

describe('Header component', () => {
  describe('render', () => {
    it('should render a link to the landing page', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find(Link).props()).toMatchObject({
        to: '/',
      });
    });
  });
});
