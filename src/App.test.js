import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';

jest.mock('axios');
axios.get.mockResolvedValue({ data: { message: [] } });

describe('App', () => {
  /*global renderWithReduxProvider */

  test('it renders a clickable heading to refresh content', () => {
    renderWithReduxProvider(<App />);
    const heading = screen.getByRole('heading', { name: 'refresh' });

    userEvent.click(heading);

    expect(axios.get).toHaveBeenCalled();
  });

  test('it renders error if error existts', () => {
    const initState = {
      loading: true,
      doggos: [],
      error: new Error('Bad Things')
    };
    renderWithReduxProvider(<App />, { initState });

    const error = screen.getByRole('alert');

    expect(error).toBeInTheDocument();
    expect(error.textContent).toBe('Bad Things');
  });
});
