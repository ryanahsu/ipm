import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'

import PROJECT_LIST from './data/portfolio-projects.json'; // Projects to display


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App projectList={PROJECT_LIST} />
  </BrowserRouter>
);
