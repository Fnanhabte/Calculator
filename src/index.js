import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
const section2 = ReactDOM.createRoot(document.getElementById('section2'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
section2.render(
  <React.StrictMode>

  </React.StrictMode>
)