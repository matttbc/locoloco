/* eslint-disable @typescript-eslint/camelcase */
import { UserManager } from 'oidc-client';
import { mocked } from 'ts-jest/utils';

import initAuthManager, {
  login,
  renewToken,
  loginRedirect,
  getUser,
  logout,
} from '../session';

jest.mock('oidc-client', () => ({
  UserManager: jest.fn().mockImplementation(() => ({
    signinRedirect: jest.fn(),
    signinSilent: jest.fn(),
    signinRedirectCallback: jest.fn(),
    getUser: jest.fn(),
    removeUser: jest.fn(),
  })),
}));

describe('Session services', () => {
  const config = {
    authority: 'authority',
    client_id: '1234',
    redirect_uri: '/redirect',
    silent_redirect_uri: '/silent',
    post_logout_redirect_uri: '/redirect',
    response_type: 'code',
    scope: 'email',
  };
  const MockedUserManager = mocked(UserManager);

  beforeEach(() => {
    MockedUserManager.mockClear();
  });

  describe('initAuthManager', () => {
    it('should create a global instance of the user auth manager', () => {
      initAuthManager(config);
      expect(MockedUserManager).toHaveBeenCalledWith(config);
    });
  });

  describe('login', () => {
    it('should call user auth manager signinRedirect method', () => {
      const userManager = initAuthManager(config);
      login();
      expect(userManager.signinRedirect).toHaveBeenCalled();
    });
  });

  describe('renewToken', () => {
    it('should call user auth manager signinSilent method', () => {
      const userManager = initAuthManager(config);
      renewToken();
      expect(userManager.signinSilent).toHaveBeenCalled();
    });
  });

  describe('loginRedirect', () => {
    it('should call user auth manager signinRedirectCallback method', () => {
      const userManager = initAuthManager(config);
      loginRedirect();
      expect(userManager.signinRedirectCallback).toHaveBeenCalled();
    });
  });

  describe('getUser', () => {
    it('should call user auth manager getUser method', () => {
      const userManager = initAuthManager(config);
      getUser();
      expect(userManager.getUser).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should call user auth manager signoutRedirect method', () => {
      const userManager = initAuthManager(config);
      logout();
      expect(userManager.removeUser).toHaveBeenCalled();
    });
  });
});
