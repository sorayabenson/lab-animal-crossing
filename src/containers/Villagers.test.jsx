import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Villagers from './Villagers';
import { MemoryRouter } from 'react-router';

describe('Villagers render', () => {
  afterEach(() => cleanup());

  it('renders a list of villagers', async () => {
    render(
      <MemoryRouter>
        <Villagers />
      </MemoryRouter>
    );
    screen.getByText('circling for landing!');
    // const ul = await screen.findByRole('list', { name: 'villagers' });
    // expect(ul).toBeInTheDocument();
    // expect(ul).toMatchSnapshot();
  });
});
