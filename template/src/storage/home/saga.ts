import { all, put, takeLatest } from 'redux-saga/effects'
import { Types, request, failed, fulfill, success } from './ducks'

function* loadHome() {
  yield put(request())
  try {
    yield put(success({ welcome: 'HalfByte Template Works!' }))
  } catch (error) {
    yield put(failed(error.message))
  } finally {
    yield put(fulfill())
  }
}


export default function* homeSaga() {
  yield all([takeLatest(Types.TRIGGER, loadHome)])
}