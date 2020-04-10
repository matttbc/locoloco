/* eslint-disable @typescript-eslint/camelcase */
import createSessionStore from '../session';

jest.mock('mobx-react', () => ({
  useLocalStore: jest.fn().mockImplementation((callback) => callback()),
}));

describe('Session store', () => {
  const user = {
    id_token: 't123',
    token_type: 'Bearer',
    profile: {
      username: 'john.c',
      email: 'johnc@locoloco.com',
    },
  };
  let session;

  beforeEach(() => {
    session = createSessionStore();
  });

  describe('props', () => {
    it('should have the proper attributes', () => {
      expect(session).toMatchObject({
        token: '',
        tokenType: '',
        username: '',
        email: '',
      });
    });
  });

  describe('set', () => {
    it('should set the attributes', () => {
      session.set(user);
      expect(session).toMatchObject({
        token: user.id_token,
        tokenType: user.token_type,
        username: user.profile.username,
        email: user.profile.email,
      });
    });
  });

  describe('clear', () => {
    it('should clear the attributes', () => {
      session.set(user);
      session.clear();
      expect(session).toMatchObject({
        token: '',
        tokenType: '',
        username: '',
        email: '',
      });
    });
  });
});
