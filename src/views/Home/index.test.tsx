/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'utils/testing';
import Home from '.';

// We use msw to intercept the network request during the test,
// and return the response { name: 'The Octocat', followers: 7641, following: 9 } after 150ms
// when receiving a get request to the 'https://api.github.com/users/octocat' endpoint
const handlers = [
  rest.get('https://api.github.com/users/octocat', (req, res, ctx) =>
    res(ctx.json({ name: 'The Octocat', followers: 7641, following: 9 }), ctx.delay(150)),
  ),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives a user after clicking the get user button', async () => {
  renderWithProviders(<Home />);

  expect(screen.queryByText(/getting data\.\.\./i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Get User/i }));

  expect(await screen.findByText(/The Octocat/i)).toBeInTheDocument();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
