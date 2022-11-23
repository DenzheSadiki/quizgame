import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import End from './End';

describe('<End />', () => {
  test('it should mount', () => {
    render(<End />);
    
    const end = screen.getByTestId('End');

    expect(end).toBeInTheDocument();
  });
});