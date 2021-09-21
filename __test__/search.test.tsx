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
  it('Search input is empty at beginning', async () => {
    const input = screen.getByRole('searchbox') as HTMLInputElement;

    expect(input.placeholder).toBe('What character do you want to meet?');
    expect(input).toHaveValue('');
  });

  // it('Serach clear input after submit', async () => {
  //   userEvent.type(screen.getByTestId(todoInput), 'Todo 1');
  //   await waitFor(() => userEvent.click(screen.getByTestId(todoSubmit)));
  //   expect(screen.getByTestId(todoInput)).toHaveValue('');
  // });
});
