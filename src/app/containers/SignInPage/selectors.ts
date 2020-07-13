import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.loginUserForm || initialState;

export const selectUsername = createSelector(
  [selectDomain],
  loginUserFormState => loginUserFormState.username,
);

export const selectTempUsername = createSelector(
  [selectDomain],
  loginUserFormState => loginUserFormState.tempUsername,
);
