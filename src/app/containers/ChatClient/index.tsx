import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export function ChatClient() {
  return (
    <>
      <Helmet>
        <title>Chatting</title>
        <meta name="description" content="ChatClient" />
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Chat Client</h1>
          <span>Get Ready to start chatting</span>
        </Grid>
      </Grid>
    </>
  );
}
