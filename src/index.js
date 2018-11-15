import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './navigation';

console.log('hola hola');

// // const initialState = (localStorage["redux-store"]) ?
// //     JSON.parse(localStorage["redux-store"]) :
// //     sampleData

// //     console.log(initialState);

// // const saveState = () =>
// //     localStorage["redux-store"] = JSON.stringify(store.getState())

// // store.subscribe(saveState)

window.React = React;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
