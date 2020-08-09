import { actions } from './slice';
import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { sendMessage } from 'utils/websocket';

const doLogin = () => {
  sendMessage('Hello');
};

export function* loginFormFromSaga() {
  yield takeLatest(actions.loginUser.type, doLogin);
  yield put(actions.userLoggedIn);
}
