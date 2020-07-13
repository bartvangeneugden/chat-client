import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  username: 'Unknown',
  tempUsername: '',
};

const userLoginSlice = createSlice({
  name: 'loginUserForm',
  initialState,
  reducers: {
    loginUser(state) {
      state.username = state.tempUsername;
      state.tempUsername = '';
    },
    updateUsernameText(state, action: PayloadAction<string>) {
      state.tempUsername = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userLoginSlice;
