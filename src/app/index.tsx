/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { SignInPage } from './containers/SignInPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Container } from '@material-ui/core';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - A simple chat client"
        defaultTitle="Chat Client"
      >
        <meta name="description" content="A React Boilerplate application" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <GlobalStyle />
    </BrowserRouter>
  );
}
