import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { NOTIFY_SUCCESS, NOTIFY_ERROR } from 'actions/notification'
import * as GrowlerActions from 'actions/growler'

const notifySuccess = (msg) => GrowlerActions.showGrowlerSuccess(msg)
const notifyError = (msg) => GrowlerActions.showGrowlerError(msg)

export function * notificationSuccessSaga ({ payload }) {
  yield put(notifySuccess(payload))
}

export function * notificationErrorSaga ({ payload }) {
  yield put(notifyError(payload))
}

function * watchNotification () {
  yield [
    takeEvery(NOTIFY_SUCCESS, notificationSuccessSaga),
    takeEvery(NOTIFY_ERROR, notificationErrorSaga)
  ]
}

export default watchNotification
