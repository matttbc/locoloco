import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useSession } from '@hooks/session';
import { useStore } from '@store';
import withAuthentication from '..';

jest.mock('mobx-react', () => ({
  useObserver: jest.fn().mockImplementation((callback) => callback()),
}));

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

jest.mock('@hooks/session', () => ({
  useSession: jest.fn(),
}));

describe('withAuthentication hoc', () => {
  const Component: React.FC<{}> = () => <span>mock</span>;

  let session;
  const renderProps = {
    someProps: 'some value',
    children: 'mock',
  };

  const mockedUseSession = mocked(useSession);
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
    mockedUseSession.mockClear();
    mockedUseStore.mockClear();
  });

  describe('render', () => {
    it('should render a Loader component if session retrieving is in progress', () => {
      mockedUseStore.mockReturnValue({ session });
      mockedUseSession.mockReturnValue({ loading: true });
      const HOCComponent = withAuthentication(
        Component,
      );
      const wrapper = shallow(<HOCComponent {...renderProps} />);
      expect(wrapper.find('Loader').length).toEqual(1);
    });

    it('should render a redirect to the landing page if session retrieving is not in progress and'
      + ' session token is undefined', () => {
      mockedUseStore.mockReturnValue({ session });
      mockedUseSession.mockReturnValue({ loading: false });
      const HOCComponent = withAuthentication(
        Component,
      );
      const wrapper = shallow(<HOCComponent {...renderProps} />);
      expect(wrapper.find('Redirect').props()).toMatchObject({
        to: '/',
      });
    });

    it('should finally render the wrapper component', () => {
      session.token = 't123';
      mockedUseStore.mockReturnValue({ session });
      mockedUseSession.mockReturnValue({ loading: false });
      const HOCComponent = withAuthentication(
        Component,
      );
      const wrapper = shallow(<HOCComponent {...renderProps} />);
      expect(wrapper.find(Component).length).toEqual(1);
      expect(wrapper.find(Component).props()).toMatchObject(renderProps);
    });
  });
});
