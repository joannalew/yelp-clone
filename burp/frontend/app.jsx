import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;  // testing
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  ReactDOM.render(<Root store={store} />, root);
});
