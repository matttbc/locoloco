import { UserManager } from 'oidc-client';

import { User } from '@store/session';

let userManager;

export default (config) => {
  userManager = new UserManager(config);
  return userManager;
};

export const login = (): Promise<void> => userManager.signinRedirect();

export const renewToken = (): Promise<User> => userManager.signinSilent();

export const loginRedirect = (): Promise<User> => userManager.signinRedirectCallback();

export const silentLogin = (): Promise<void> => userManager.signinSilentCallback();

export const getUser = (): Promise<User | null> => userManager.getUser();

export const logout = (): Promise<void> => userManager.removeUser();
