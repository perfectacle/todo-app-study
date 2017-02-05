import React from 'react';
import { render } from 'react-dom';
import Container from './Container';

if (process.env.NODE_ENV !== 'production') { // HTML 핫리로드
  require('./index.html');
}
import './style.css';

render(
  <Container />
  ,document.getElementById('app')
);