import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default applyMiddleware(thunk)(createStore)(rootReducer, enhancers);
// export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
