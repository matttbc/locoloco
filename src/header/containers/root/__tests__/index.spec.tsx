import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import * as services from '@services/session';
import Header from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

jest.mock('mobx-react', () => ({
  useObserver: jest.fn().mockImplementation((callback) => callback()),
}));

describe('Header container', () => {
  let session;
  const mockedUseStore = mocked(useStore);

  beforeEach(() => {
    session = {
      token: 't123',
      tokenType: '',
      email: '',
      username: 'john.c',
      set: jest.fn(),
      clear: jest.fn(),
    };
    mockedUseStore.mockClear();
  });

  it('should render a Header component', () => {
    mockedUseStore.mockReturnValue({ session });
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Header').props()).toMatchObject({
      isUserAuthenticated: true,
      username: session.username,
    });
  });

  it('should pass a login prop connected to the login service', () => {
    jest.spyOn(services, 'login').mockReturnValue(Promise.resolve());
    mockedUseStore.mockReturnValue({ session });
    const wrapper = shallow(<Header />);
    const props = wrapper.find('Header').props() as any;
    props.login();
    expect(services.login).toHaveBeenCalled();
  });

  it('should pass a logout prop connected to the logout service / should clean session', () => {
    const promise = Promise.resolve();
    jest.spyOn(services, 'logout').mockReturnValue(promise);
    mockedUseStore.mockReturnValue({ session });
    const wrapper = shallow(<Header />);
    const props = wrapper.find('Header').props() as any;
    props.logout();
    return promise.then(() => {
      expect(session.clear).toHaveBeenCalled();
    });
  });
});
