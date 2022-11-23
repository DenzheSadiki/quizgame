import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Python from './Python';

describe('<Python />', () => {
  test('it should mount', () => {
    render(<Python />);
    
    const python = screen.getByTestId('Python');

    expect(python).toBeInTheDocument();
  });
});