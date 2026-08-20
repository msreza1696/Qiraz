import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for offline PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
        console.log('QIRAZ PWA: ServiceWorker registration successful with scope: ', reg.scope);
      })
      .catch((err) => {
        console.error('QIRAZ PWA: ServiceWorker registration failed: ', err);
      });
  });
}
