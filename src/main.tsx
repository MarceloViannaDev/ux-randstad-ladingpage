import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Footer, Header } from './components/index.ts';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />

    <App />

    <Footer />
  </React.StrictMode>
);
