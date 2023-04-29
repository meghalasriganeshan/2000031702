import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(renderApp());

const measurePerformance = (results) => {
  console.log(results);
};

reportWebVitals(measurePerformance);
