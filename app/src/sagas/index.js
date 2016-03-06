import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { SIGNIN_REQUEST, SIGNIN_ERROR } from '../actions/signIn'
import Api from '../services/api'

const login = (email, password) => {
  return Api.post('/login', { username: email, password: password })
}

export function * loginSaga ({ payload }) {
  const { email, password } = payload
  const res = yield call(login, email, password)
  console.log('res', res)
  // const { email, password } = yield take(SIGNIN_REQUEST)
  try {

    /*
    let { data } = yield call(request.post, '/login', { user, pass });
    yield fork(loadUserData, data.uid);
    yield put({ type: LOGIN_SUCCESS, data });*/
  } catch (error) {
    yield put({ type: SIGNIN_ERROR, error })
  }
}

function * watchLogin () {
  console.log('watchLogin')
  yield * takeEvery(SIGNIN_REQUEST, loginSaga)
}

export default watchLogin