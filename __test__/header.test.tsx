import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '@/components/Header';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

beforeEach(() => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);
  render(<Header />);
});

describe('Header component', () => {
  it('renders the Star Wars logo', async () => {
    await waitFor(() => {
      const imageElement = screen.getByTestId(/logo/i);

      expect(imageElement).toBeInTheDocument();
    });
  });

  it('renders the Search component', async () => {
    const searchElement = screen.getByRole('searchbox') as HTMLInputElement;
    expect(searchElement.value).toBe('');
  });

  it.skip('renders the last 3 Characters links', async () => {
    const listElements = (await screen.findAllByRole(
      'listitem'
    )) as HTMLLIElement[];
    expect(listElements).toHaveLength(3);
  });
});
