import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import App from './App'; // Assuming App is your main component

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your component tree with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
