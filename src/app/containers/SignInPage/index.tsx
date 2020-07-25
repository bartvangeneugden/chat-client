import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, sliceKey, reducer } from './slice';
import { selectTempUsername, selectUsername } from './selectors';
import { loginFormFromSaga } from './saga';

export function SignInPage() {
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginFormFromSaga });

  const loginUser = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(actions.loginUser());
    event.preventDefault();
  };

  const changeUsernameText = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.updateUsernameText(event.target.value));
  };

  const tempUsername = useSelector(selectTempUsername);
  const username = useSelector(selectUsername);

  return (
    <>
      <Helmet>
        <title>Sign In Page</title>
        <meta name="description" content="Sign in to the chat client" />
      </Helmet>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <h1>Sign in</h1>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={loginUser}>
            <TextField
              id="username-field"
              label="Username"
              onChange={changeUsernameText}
            />
            <Button variant="contained" color="primary" type="submit">
              Go!
            </Button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <ul>
            <li>Temp Username = {tempUsername}</li>
            <li>Username = {username}</li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}
