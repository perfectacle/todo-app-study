if (process.env.NODE_ENV !== 'production') { // 개발용 버전에서만 HTML 핫리로드
  require('./index.html');
}
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent';

ReactDOM.render(
  (<Parent/>),
  document.getElementById('app')
);