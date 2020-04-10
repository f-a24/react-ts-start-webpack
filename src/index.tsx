import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import App from './App';

ReactDOM.render(
  <>
    <Reset />
    <App title="Welcome to React" />
  </>,
  document.getElementById('root') as HTMLElement
);
