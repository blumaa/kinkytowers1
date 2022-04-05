require('file-loader?name=[name].[ext]!../dist/index.html')
import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import App from './App'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Router>
    <App tab="home" />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

module.hot.accept();

