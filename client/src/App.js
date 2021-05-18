import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider} from './AuthContext';
import Header from './Header';
import Home from './Home';
import WhatAreCommunityGarden from './Whatarecommgar';
import Getinvolved from './Getinvolved';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wacg">
            <WhatAreCommunityGarden />
          </Route>
          <Route path="/getinvolved">
            <Getinvolved />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <Route path="/register">
              <Register />
            </Route>
          )}
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
