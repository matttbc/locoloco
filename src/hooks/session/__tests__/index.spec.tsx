/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { render } from '@testing-library/react';

import * as services from '@services/session';
import { useSessionStatus, useLoginStatus } from '..';

describe('Session hooks', () => {
  const user = {
    id_token: 't123',
    token_type: 'Bearer',
    profile: {
      username: 'john.c',
      email: 'john.c@locoloco.com',
    },
  };
  let session;
  let Component;

  beforeEach(() => {
    session = {
      set: jest.fn(),
    };
  });

  describe('useSessionStatus', () => {
    const createComponent = (sessionData) => (
      () => {
        const { loading } = useSessionStatus(sessionData);

        return <span>{loading.toString()}</span>;
      }
    );

    it('should return a true loading status if session token is falsy', () => {
      jest.spyOn(services, 'getUser').mockReturnValue(Promise.resolve(user));
      Component = createComponent(session);
      const { findByText } = render(<Component />);
      expect(findByText('true')).toBeDefined();
    });

    it('should return a false loading status if session token is truthy', () => {
      session.token = 't123';
      Component = createComponent(session);
      const { findByText } = render(<Component />);
      expect(findByText('false')).toBeDefined();
    });

    it('should call getUser services method on mount if session token is not defined'
      + ' and set the session user data on success if a session exists', () => {
      const promise = Promise.resolve(user);
      jest.spyOn(services, 'getUser').mockReturnValue(promise);
      Component = createComponent(session);

      const { findByText } = render(<Component />);
      expect(findByText('true')).toBeDefined();
      expect(services.getUser).toHaveBeenCalled();
      return promise.then(() => {
        expect(session.set).toHaveBeenCalledWith(user);
        expect(findByText('false')).toBeDefined();
      });
    });

    it('should call getUser services method on mount if session token is not defined'
      + ' and do not set the session user data on success if session does not exist', () => {
      const promise = Promise.resolve(null);
      jest.spyOn(services, 'getUser').mockReturnValue(promise);
      Component = createComponent(session);

      const { findByText } = render(<Component />);
      expect(findByText('true')).toBeDefined();
      expect(services.getUser).toHaveBeenCalled();
      return promise.then(() => {
        expect(session.set).not.toHaveBeenCalled();
        expect(findByText('false')).toBeDefined();
      });
    });
  });

  describe('useLoginStatus', () => {
    const createComponent = (sessionData) => (
      () => {
        const { loading, error } = useLoginStatus(sessionData);

        return (
          <div>
            <span>{loading.toString()}</span>
            {error && <span>{error}</span>}
          </div>
        );
      }
    );

    it('should return a true loading status if login is in progress', () => {
      jest.spyOn(services, 'loginRedirect').mockReturnValue(Promise.resolve(user));
      Component = createComponent(session);
      const { findByText } = render(<Component />);
      expect(findByText('true')).toBeDefined();
    });

    it('should call loginRedirect services method on mount'
      + ' and set the session user data on success', () => {
      const promise = Promise.resolve(user);
      jest.spyOn(services, 'loginRedirect').mockReturnValue(promise);
      Component = createComponent(session);

      const { findByText } = render(<Component />);
      expect(findByText('true')).toBeDefined();
      expect(services.loginRedirect).toHaveBeenCalled();
      return promise.then(() => {
        expect(session.set).toHaveBeenCalledWith(user);
        expect(findByText('false')).toBeDefined();
      });
    });

    it('should call loginRedirect services method on mount'
      + ' and set an error message on error ', () => {
      const promise = Promise.reject(new Error('Error!'));
      jest.spyOn(services, 'loginRedirect').mockReturnValue(promise);
      Component = createComponent(session);

      const { findByText } = render(<Component />);
      expect(findByText('true')).toBeDefined();
      expect(services.loginRedirect).toHaveBeenCalled();
      return promise.then().catch(() => {
        expect(session.set).not.toHaveBeenCalled();
        expect(findByText('false')).toBeDefined();
        expect(findByText('Authentication failed. Please try again later.')).toBeDefined();
      });
    });
  });
});
