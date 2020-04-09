import { User, UserManager } from 'oidc-client';

let userManager;

export default (config) => {
  userManager = new UserManager(config);
  return userManager;
};

export const login = (): Promise<void> => userManager.signinRedirect();

export const renewToken = (): Promise<User> => userManager.signinSilent();

export const loginRedirect = (): Promise<User> => userManager.signinRedirectCallback();

export const getUser = (): Promise<User | null> => userManager.getUser();

export const logout = (): Promise<void> => userManager.signoutRedirect();
