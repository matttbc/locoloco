import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from '../index';

jest.mock('@header/containers/root', () => (
  jest.fn(() => <header>header</header>)
));

describe('App', () => {
  const history = createMemoryHistory();

  const MainRouteComponent = () => (<div>Main route</div>);
  const SecondaryRouteComponent = () => (<div>Secondary route</div>);

  const routes = [
    {
      path: '/',
      exact: true,
      component: MainRouteComponent,
    },
    {
      path: '/secondary-route',
      component: SecondaryRouteComponent,
    },
  ];

  describe('render', () => {
    it('should render a header', () => {
      const { getByText } = render(
        <Router history={history}>
          <App routes={routes} />
        </Router>,
      );
      expect(getByText('header')).toBeDefined();
    });

    it('should render the right component when navigating to a route', () => {
      let wrapper = render(
        <Router history={history}>
          <App routes={routes} />
        </Router>,
      );
      expect(wrapper.container.innerHTML).toMatch('Main route');

      history.push('/secondary-route');
      wrapper = render(
        <Router history={history}>
          <App routes={routes} />
        </Router>,
      );
      expect(wrapper.container.innerHTML).toMatch('Secondary route');
    });
  });
});
