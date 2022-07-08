import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { RecoilRoot } from 'recoil';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
