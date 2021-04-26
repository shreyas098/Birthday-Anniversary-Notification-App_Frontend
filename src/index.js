import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MiniDrawer from "./components/MiniDrawer";

ReactDOM.render(
  <React.StrictMode>
    <MiniDrawer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
