import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Save the flyer image from the input to assets folder
const flyerImage = document.createElement('img');
//flyerImage.src = document.querySelector('img[alt="06.09.2025"]')?.src || '';

// Create root element and render app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);