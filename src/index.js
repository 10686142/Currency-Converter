import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// Axios setup for API calls
axios.defaults.baseURL = 'https://api.exchangeratesapi.io' // the prefix of the URL
axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
axios.defaults.headers.post['Accept'] = 'application/json'  // default header for all POST request
 
/*
StrictMode is a tool for highlighting potential problems in an application
Strict mode checks are run in development mode only
Info on problem checks ran: https://reactjs.org/docs/strict-mode.html
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
