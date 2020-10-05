import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Routes from './routes/Routes';
import GlobalStyle from './components/GlobalStyle';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

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
