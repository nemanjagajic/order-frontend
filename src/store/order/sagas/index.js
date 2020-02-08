import { all, takeLatest } from 'redux-saga/effects'
import {FETCH_ORDERS, MAKE_ORDER} from '../orderConstants'
import {fetchOrders, makeOrder} from './orderSaga'

export default function* authSaga() {
  yield all([
    takeLatest(MAKE_ORDER, makeOrder),
    takeLatest(FETCH_ORDERS, fetchOrders)
  ])
}
