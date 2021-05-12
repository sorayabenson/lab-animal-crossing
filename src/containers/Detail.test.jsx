import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Detail from './Detail';

describe('Detail render', () => {
  afterEach(() => cleanup());

  it('renders a villager', async () => {
    render(
      <Detail
        match={{
          params: {
            id: '5f5fb4bbbfd05c2aed82e526',
          },
        }}
      />
    );
    screen.getByText('a visitor is arriving!');
    const div = await screen.findAllByRole('group', { name: 'villager' });
    expect(div).toMatchSnapshot();
  });
});
