import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useSession } from '@hoc/with-authentication';
import App from '..';

jest.mock('@hoc/with-authentication', () => ({
  useSession: jest.fn(),
}));

describe('App container', () => {
  const MainRouteComponent = () => (<div>Main route</div>);
  const SecondaryRouteComponent = () => (<div>Secondary route</div>);
  const renderProps = {
    routes: [
      {
        path: '/',
        exact: true,
        component: MainRouteComponent,
      },
      {
        path: '/secondary-route',
        component: SecondaryRouteComponent,
      },
    ],
  };

  const mockedUseSession = mocked(useSession);

  beforeEach(() => {
    mockedUseSession.mockClear();
  });

  describe('render', () => {
    it('should render a Loader component if session loading prop value is truthy', () => {
      mockedUseSession.mockReturnValue({ loading: true, token: '' });
      const wrapper = shallow(<App {...renderProps} />);
      expect(wrapper.find('Loader').length).toEqual(1);
    });

    it('should render the App component if session loading prop value is falsy', () => {
      mockedUseSession.mockReturnValue({ loading: false, token: '' });
      const wrapper = shallow(<App {...renderProps} />);
      expect(wrapper.find('App').props()).toMatchObject({
        routes: renderProps.routes,
      });
    });
  });
});
