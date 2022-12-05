import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Root from './root';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

