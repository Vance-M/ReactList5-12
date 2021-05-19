import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarContainer from './avatarContainer';
import App from '../components/app/App';
import { MemoryRouter } from 'react-router';


describe('avatarContainer component', () => {
  it('renders a list of characters', async () => {
    render(
    <MemoryRouter>
     <AvatarContainer />  
    </MemoryRouter>)


    screen.getByText('Loading');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
