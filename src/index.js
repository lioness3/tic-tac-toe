import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import markSquareReducer from './reducers/mark-square-reducer'

const store = createStore(markSquareReducer);

let unsubscribe = store.subscribe(() =>
{}
)
ReactDOM.render(
  <Provider store={store}>
{  console.log(store.getState())}
  <App />
  </Provider>,
  document.getElementById('root')
);
