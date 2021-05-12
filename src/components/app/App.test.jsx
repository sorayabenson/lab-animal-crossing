import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

describe('App render', () => {
  
  afterEach(() => cleanup());
  
  it('renders App', () => {
    render(<App />)
    screen.getByText(`let's cross some animals!`);
  })

});
