import React from 'react';
import { render } from '@testing-library/react';

import Landing from '..';

describe('Landing page component', () => {
  const renderProps = {
    message: 'Hello world!',
  };

  describe('render', () => {
    it('should render a message', () => {
      const { findByText } = render(<Landing {...renderProps} />);
      expect(findByText(renderProps.message)).toBeDefined();
    });
  });
});
