import React from 'react';
import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';

import Landing from '..';

describe('Landing component', () => {
  let renderProps;
  let wrapper;

  beforeEach(() => {
    renderProps = {
      goToNextStep: jest.fn(),
    };
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('render', () => {
    it('should render a navigation button', () => {
      renderProps.isUserAuthenticated = true;
      wrapper = shallow(<Landing {...renderProps} />);
      expect(wrapper.find(Button).length).toEqual(1);
    });
  });

  describe('events handlers', () => {
    it('should call goToNextStep prop on navigation button click', () => {
      wrapper = shallow(<Landing {...renderProps} />);
      wrapper.find(Button).props().onClick({} as React.MouseEvent<HTMLButtonElement>);
      expect(renderProps.goToNextStep).toHaveBeenCalled();
    });
  });
});
