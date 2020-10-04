import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';
import AddUser from './pages/AddUser';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
