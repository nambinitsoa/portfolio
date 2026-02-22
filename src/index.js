import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // ⚠️ IMPORTANT : utiliser style.css (tailwind)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);