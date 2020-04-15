import React from 'react';
import { shallow, mount } from 'enzyme';

import { StoreProvider, useStore } from '..';

describe('Store', () => {
  const Component = () => {
    useStore();
    return <span>mock</span>;
  };
  let wrapper;

  describe('StoreProvider', () => {
    afterEach(() => {
      wrapper.unmount();
    });

    it('should pass the stores via a context provider', () => {
      wrapper = shallow(
        <StoreProvider>
          <Component />
        </StoreProvider>,
      );
      const contextValue = wrapper.props().value;
      expect(contextValue.session).toBeDefined();
      expect(contextValue.trade).toBeDefined();
      expect(wrapper.find(Component).length).toEqual(1);
    });
  });

  describe('useStore', () => {
    it('should throw if it is used outside of a StoreProvider', () => {
      expect(() => mount(<Component />)).toThrow();
    });

    it('should not throw if it is used inside of a StoreProvider', () => {
      expect(() => (
        mount(
          <StoreProvider>
            <Component />
          </StoreProvider>,
        )
      )).not.toThrow();
    });
  });
});
