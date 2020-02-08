import { all, takeLatest } from 'redux-saga/effects'
import { MAKE_ORDER } from '../orderConstants'
import { makeOrder } from './orderSaga'

export default function* authSaga() {
  yield all([
    takeLatest(MAKE_ORDER, makeOrder)
  ])
}
