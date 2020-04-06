import React from 'react';
import { shallow } from 'enzyme';

import withSuspense from '..';

describe('withSuspense hoc', () => {
  const Component: React.FC<{}> = () => <span>mock</span>;

  const renderProps = {
    someProps: 'some value',
    children: 'mock',
  };

  describe('render', () => {
    it('should render the wrapped component', () => {
      const HOCComponent = withSuspense(
        Component,
      );
      const wrapper = shallow(<HOCComponent {...renderProps} />);
      expect(wrapper.find(Component).length).toEqual(1);
      expect(wrapper.find(Component).props()).toMatchObject(renderProps);
    });
  });
});
