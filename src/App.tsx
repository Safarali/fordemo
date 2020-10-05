import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
