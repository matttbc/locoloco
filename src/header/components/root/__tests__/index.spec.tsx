import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { shallow } from 'enzyme';

import Header from '..';

describe('Header component', () => {
  let renderProps;

  beforeEach(() => {
    renderProps = {
      login: jest.fn(),
      logout: jest.fn(),
    };
  });

  describe('render', () => {
    it('should render a logout button if isUserAuthenticated prop value is truthy', () => {
      renderProps.isUserAuthenticated = true;
      const wrapper = shallow(<Header {...renderProps} />);
      expect(wrapper.find(Button).length).toEqual(1);
    });

    it('should render the username if isUserAuthenticated prop value is truthy and'
      + ' username prop value is defined', () => {
      renderProps.isUserAuthenticated = true;
      renderProps.username = 'john.c';
      const wrapper = shallow(<Header {...renderProps} />);
      expect(wrapper.find(Typography).at(1).text()).toEqual(renderProps.username);
    });

    it('should render a login button if isUserAuthenticated prop value is falsy', () => {
      renderProps.isUserAuthenticated = false;
      const wrapper = shallow(<Header {...renderProps} />);
      expect(wrapper.find(Button).length).toEqual(1);
    });
  });

  describe('events handlers', () => {
    it('should call login prop on login button click', () => {
      renderProps.isUserAuthenticated = false;
      const wrapper = shallow(<Header {...renderProps} />);
      wrapper.find(Button).props().onClick({} as React.MouseEvent<HTMLButtonElement>);
      expect(renderProps.login).toHaveBeenCalled();
    });

    it('should call logout prop on logout button click', () => {
      renderProps.isUserAuthenticated = true;
      const wrapper = shallow(<Header {...renderProps} />);
      wrapper.find(Button).props().onClick({} as React.MouseEvent<HTMLButtonElement>);
      expect(renderProps.logout).toHaveBeenCalled();
    });
  });
});
