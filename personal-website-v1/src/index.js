import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class extends OriginalResizeObserver {
      constructor(callback) {
        const wrapped = (entries, observer) => {
          // Defer to next frame to avoid nested ResizeObserver notifications
          requestAnimationFrame(() => callback(entries, observer));
        };
        super(wrapped);
      }
    };
  }

  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  console.error = (...args) => {
    const first = args[0];
    if (
      typeof first === 'string' &&
      (first.includes('ResizeObserver loop completed') ||
        first.includes('ResizeObserver loop limit exceeded'))
    ) {
      return;
    }
    originalConsoleError(...args);
  };
  console.warn = (...args) => {
    const first = args[0];
    if (
      typeof first === 'string' &&
      (first.includes('ResizeObserver loop completed') ||
        first.includes('ResizeObserver loop limit exceeded'))
    ) {
      return;
    }
    originalConsoleWarn(...args);
  };

  // Catch non-console error paths
  const roRegex = /(ResizeObserver loop completed|ResizeObserver loop limit exceeded)/;
  window.addEventListener('error', (event) => {
    if (event && typeof event.message === 'string' && roRegex.test(event.message)) {
      event.stopImmediatePropagation();
    }
  });
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event && event.reason;
    const message = typeof reason === 'string' ? reason : reason && reason.message;
    if (typeof message === 'string' && roRegex.test(message)) {
      event.preventDefault();
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


