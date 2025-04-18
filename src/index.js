import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Custom.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


reportWebVitals();


// api link persian-cms: https://persian-cms-8bd51-default-rtdb.europe-west1.firebasedatabase.app/