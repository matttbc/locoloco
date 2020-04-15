import React from 'react';
import { Typography } from '@material-ui/core';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useSilentLoginStatus } from '@hooks/session';
import AuthenticationSilentRenew from '..';

jest.mock('@hooks/session', () => ({
  useSilentLoginStatus: jest.fn(),
}));

describe('AuthenticationSilentRenew container', () => {
  let wrapper;
  const mockedUseLogin = mocked(useSilentLoginStatus);

  beforeEach(() => {
    mockedUseLogin.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a Loader component if login is in progress', () => {
    mockedUseLogin.mockReturnValue({ loading: true, error: '' });
    wrapper = shallow(<AuthenticationSilentRenew />);
    expect(wrapper.find('Loader').length).toEqual(1);
  });

  it('should render an error if silent login was not successful', () => {
    const error = 'Login error!';
    mockedUseLogin.mockReturnValue({ loading: false, error });
    wrapper = shallow(<AuthenticationSilentRenew />);
    expect(wrapper.find(Typography).text()).toEqual(error);
  });

  it('should render a redirect to the landing page if silent login was successful', () => {
    mockedUseLogin.mockReturnValue({ loading: false, error: '' });
    wrapper = shallow(<AuthenticationSilentRenew />);
    expect(wrapper.find('Redirect').props()).toMatchObject({
      to: '/',
    });
  });
});
