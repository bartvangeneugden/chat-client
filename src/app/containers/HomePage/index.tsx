import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Homepage to the chat client" />
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Chat Client</h1>
          <Button href="/signin">Click here to start!</Button>
        </Grid>
      </Grid>
    </>
  );
}
