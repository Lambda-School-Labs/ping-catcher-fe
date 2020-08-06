import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
 
jest.mock('@okta/okta-react', () => ({
    useOktaAuth: () => {
      return {
        authState: {},
        authService: {}
    };
  }
}));

describe('App', () => {
  test('renders App component', () => {
    render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    ,);
  });
});