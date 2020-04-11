/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { render } from '@testing-library/react';

import * as services from '@services/session';
import { useSession } from '..';

describe('useSession hook', () => {
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

  const createComponent = (sessionData) => (
    () => {
      const { loading } = useSession(sessionData);

      return <span>{loading.toString()}</span>;
    }
  );

  beforeEach(() => {
    session = {
      set: jest.fn(),
    };
  });

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
