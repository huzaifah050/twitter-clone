import React from 'react';
import './App.css';
import MainDisplay from './components/layouts/MainDisplay';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/layouts/WelcomePage';
import LoginPage from './components/layouts/auth/LoginPage';
import Profile from './components/layouts/Profile';
// import ProtectedRoutes from './components/layouts/auth/ProtectedRoutes';

function App() {
  return (
    <>
      <ThemeProvider>
        <CSSReset />

        <Switch>
          <Route exact path="/" component={MainDisplay} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
