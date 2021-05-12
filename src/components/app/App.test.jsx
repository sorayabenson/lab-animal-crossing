import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Villagers from '../../containers/Villagers';
import Detail from '../../containers/Detail';

describe('Villagers component', () => {
  afterEach(() => cleanup());
  it('renders a list of villagers', () => {
    render(<Villagers />);
    screen.getByText('we are circling for landing!');
    const ul = screen.findByRole('list', { name: 'villagers' })
    // expect(ul).not.toBeEmptyDOMElement()
  });
});
