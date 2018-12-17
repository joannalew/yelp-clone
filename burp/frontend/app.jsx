import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { createReview, updateReview, deleteReview } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {entities: {users: {[window.currentUser.id]: window.currentUser}}, session: {id: window.currentUser.id}};
  }
  const store = configureStore(preloadedState);

  window.getState = store.getState;  // testing
  window.dispatch = store.dispatch;

  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;

  ReactDOM.render(<Root store={store} />, root);
});
