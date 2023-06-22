import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  // Ract.StrictMode does not render any visible UI, it activates additional checks and warnings for its descendants.
  <React.StrictMode> 
  <App />
  </React.StrictMode>
);
