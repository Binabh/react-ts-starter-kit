import React from 'react';
import { render } from '@testing-library/react';
import About from '.';

describe('About Component', () => {
  it('About should be in h1', () => {
    const { getByText } = render(<About />);
    expect(getByText('About')).toMatchInlineSnapshot(`
      <h1>
        About
      </h1>
    `);
  });
});
