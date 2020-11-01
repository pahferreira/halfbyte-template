import { fork } from 'redux-saga/effects'
// Sagas
import homeSaga from 'storage/home/saga'

export default function* rootSaga() {
  yield fork(homeSaga)
}