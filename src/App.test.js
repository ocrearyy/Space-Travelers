import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from './Redux/configureStore';
import App from './Components/App';

const appRender = () => render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

describe('App', () => {
  it('displays withput error', () => {
    appRender();
  });
  it('displays the rockets', () => {
    appRender();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
  });
  it('displays the missions', () => {
    appRender();
    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
  it('display the profile section', () => {
    appRender();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
  it('event listens for a click on the page', () => {
    appRender();
    const mission = screen.getByText('Missions');
    fireEvent.click(mission);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});