import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// always put one empty line between 3rd patry dependencies and local ones
import store from './store';
import Navigation from './navigation';
import './style/main.scss';

console.log('hola hola');

// // const initialState = (localStorage["redux-store"]) ?
// //     JSON.parse(localStorage["redux-store"]) :
// //     sampleData

// //     console.log(initialState);

// // const saveState = () =>
// //     localStorage["redux-store"] = JSON.stringify(store.getState())

// // store.subscribe(saveState)

// this looks pretty bad, never do that, same with store
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
