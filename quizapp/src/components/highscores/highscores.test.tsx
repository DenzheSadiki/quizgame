import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Highscores from './Highscores';

describe('<Highscores />', () => {
  test('it should mount', () => {
    render(<Highscores />);
    
    const highscores = screen.getByTestId('Highscores');

    expect(highscores).toBeInTheDocument();
  });
});