import React from 'react';
import { GlobalStyle } from  './style';
import { BrowserRouter } from 'react-router-dom';
import { IconStyle  } from './assets/iconfont/iconfont'
import Routes from './routes/index.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
