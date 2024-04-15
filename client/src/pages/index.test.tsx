import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { Index } from '.';

describe('Top', () => {
  afterEach(() => {
    cleanup();
  });

  test('should match to the snapshot', () => {
    const { asFragment } = render(<Index />);
    expect(asFragment()).toMatchSnapshot();
  });
});
