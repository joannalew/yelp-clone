import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { login, logout, signup } from './util/session_api_util';
import { fetchBusinesses, fetchBusiness, createBusiness } from './util/business_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {entities: {users: {[window.currentUser.id]: window.currentUser}}, session: {id: window.currentUser.id}};
  }
  const store = configureStore(preloadedState);

  window.getState = store.getState;  // testing
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.fetchBusiness = fetchBusiness;
  window.fetchBusinesses = fetchBusinesses;
  window.createBusiness = createBusiness;

  ReactDOM.render(<Root store={store} />, root);
});
