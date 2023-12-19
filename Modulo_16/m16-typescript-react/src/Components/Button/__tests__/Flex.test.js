import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import Flex from '../../Flex/Flex';

test('renders Flex component with given props', () => {
  const { container } = render(
    <Flex direction="row" align="center" justify="space-between">
      <div>Child 1</div>
      <div>Child 2</div>
    </Flex>
  );

  const flexContainer = container.firstChild;

  // Assert that the container has the correct classes
  expect(flexContainer).toHaveClass('ds-flex');
  expect(flexContainer).toHaveClass('direction-action-row');
  expect(flexContainer).toHaveClass('align-action-center');
  expect(flexContainer).toHaveClass('justify-action-space-between');

  // Assert that the children are rendered
  expect(container).toHaveTextContent('Child 1');
  expect(container).toHaveTextContent('Child 2');
});
