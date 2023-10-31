import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { WrapperFull } from './components/Layout/Wrapper/WrapperFull.tsx';
import { Footer, Header, Wrapper } from './components/index.ts';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrapperFull className="bg-brand-senary">
      <Wrapper>
        <Header />
      </Wrapper>
    </WrapperFull>
    <Wrapper>
      <App />
    </Wrapper>
    <Wrapper>
      <Footer />
    </Wrapper>
  </React.StrictMode>
);
