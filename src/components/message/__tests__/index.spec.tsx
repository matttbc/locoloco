import React from 'react';
import { render } from '@testing-library/react';

import Message from '..';

describe('Message component', () => {
  describe('render', () => {
    let renderProps;

    beforeEach(() => {
      renderProps = {
        message: 'error',
      };
    });

    it('should render a message', () => {
      const { getByText } = render(<Message {...renderProps} />);
      expect(getByText(renderProps.message)).toBeDefined();
    });
  });
});
