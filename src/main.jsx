import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// function onScroll (evt) {

//     // Store the scroll value for laterz.
//     lastScrollY = window.scrollY;

//     // Prevent multiple rAF callbacks.
//     if (scheduledAnimationFrame)
//     return;

//     scheduledAnimationFrame = true;
//     requestAnimationFrame(readAndUpdatePage);
// }

// window.addEventListener('scroll', onScroll);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
