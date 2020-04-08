import React from 'react';
import { shallow, mount } from 'enzyme';

import * as storeConfig from '@store';
import * as services from '@services/ping';
import LandingContainer from '..';
import LandingComponent from '../../../components/root';

describe('Landing page container', () => {
  let store;

  beforeEach(() => {
    store = {
      ping: {
        message: 'Hello World!',
      },
    };
    jest.spyOn(storeConfig, 'useStore').mockReturnValue(store);
  });

  describe('render', () => {
    it('should render a Landing page component', () => {
      const wrapper = shallow(<LandingContainer />);
      expect(wrapper.find(LandingComponent).length).toEqual(1);
    });
  });

  describe('mount', () => {
    it('should call ping services method and set the message in the store in case of success', () => {
      const promise = Promise.resolve({ data: { message: 'Hello!' } });
      jest.spyOn(services, 'fetch').mockReturnValue(promise);
      mount(<LandingContainer />);
      expect(services.fetch).toHaveBeenCalled();
      return promise.then(() => {
        expect(store.ping.message).toEqual('Hello!');
      });
    });

    it('should call ping services method and set the error message in the store in case of an error', () => {
      const promise = Promise.reject(new Error('Error!'));
      jest.spyOn(services, 'fetch').mockReturnValue(promise);
      mount(<LandingContainer />);
      expect(services.fetch).toHaveBeenCalled();
      return promise.then().catch(() => {
        expect(store.ping.message).toEqual('Error!');
      });
    });
  });
});
