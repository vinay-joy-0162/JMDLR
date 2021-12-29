import React from 'react';
import AppRouter from "./routers/AppRouter";
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/Admin/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './components/Admin/actions/authActions';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./admin-login";
  }
}


function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
