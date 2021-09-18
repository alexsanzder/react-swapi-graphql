import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyApp from '@/pages/_app';

beforeEach(() => {
  render(<MyApp Component={<></>} pageProps={{}} />);
});

it('renders the header', async () => {
  await waitFor(() => {
    const headerElement = screen.getByTestId('header');

    expect(headerElement).toBeInTheDocument();
  });
});

it('renders the footer', async () => {
  await waitFor(() => {
    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
  });
});
