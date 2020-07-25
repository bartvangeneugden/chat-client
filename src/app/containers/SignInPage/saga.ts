import { actions } from './slice';
import { call, put, select, takeLatest, delay } from 'redux-saga/effects';

const doLogin = () => {};

export function* loginFormFromSaga() {
  yield takeLatest(actions.loginUser.type, doLogin);
}
