import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyApp from '@/pages/_app';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

beforeEach(() => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);
  render(<MyApp Component={<></>} pageProps={{}} />);
});

it.skip('renders the header', async () => {
  await waitFor(() => {
    const headerElement = screen.getByTestId('header');

    expect(headerElement).toBeInTheDocument();
  });
});

it.skip('renders the footer', async () => {
  await waitFor(() => {
    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
  });
});
