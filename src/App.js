import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Login from './pages/Login';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {isAuthenticated ? (
            <>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/add" component={AddUser} />
              <PrivateRoute path="/edit" component={EditUser} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
