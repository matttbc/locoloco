/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Typography } from '@material-ui/core';
import { shallow, mount } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useStore } from '@store';
import { useLoginStatus } from '@hooks/session';
import AuthenticationCallback from '..';

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@hooks/session', () => ({
  useLoginStatus: jest.fn(),
}));

describe('AuthenticationCallback container', () => {
  const user = {
    id_token: 't123',
    token_type: 'Bearer',
    profile: {
      username: 'john.c',
      email: 'john.c@locoloco.com',
    },
  };
  let session;
  const mockedUseLogin = mocked(useLoginStatus);
  const mockedUseStore = mocked(useStore);

  beforeEach(() => {
    session = {
      token: '',
      tokenType: '',
      email: '',
      username: '',
      set: jest.fn(),
      clear: jest.fn(),
    };
    mockedUseStore.mockClear();
    mockedUseLogin.mockClear();
  });

  it('should render a Loader component if login is in progress', () => {
    mockedUseStore.mockReturnValue({ session });
    mockedUseLogin.mockReturnValue({ loading: true, error: '' });
    const wrapper = shallow(<AuthenticationCallback />);
    expect(wrapper.find('Loader').length).toEqual(1);
  });

  it('should render an error if login was not successful', () => {
    mockedUseStore.mockReturnValue({ session });
    const error = 'Login error!';
    mockedUseLogin.mockReturnValue({ loading: false, error });
    const wrapper = shallow(<AuthenticationCallback />);
    expect(wrapper.find(Typography).text()).toEqual(error);
  });

  it('should render a redirect to the landing page if logon was successful', () => {
    mockedUseStore.mockReturnValue({ session });
    mockedUseLogin.mockReturnValue({ loading: false, error: '' });
    const wrapper = shallow(<AuthenticationCallback />);
    expect(wrapper.find('Redirect').props()).toMatchObject({
      to: '/',
    });
  });
});
