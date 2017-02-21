import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Container from './containers/Container';

if (process.env.NODE_ENV !== 'production') { // HTML 핫리로드
  require('./index.html');
}
import './style.css';

render(
  <Provider store={store}>
    <Container/>
  </Provider>
  ,document.getElementById('app')
);