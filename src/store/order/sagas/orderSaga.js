import { call, put } from 'redux-saga/effects'
import orderService from '../../../services/api/orderService'
import {setOrders} from '../orderActions'

export function* fetchOrders() {
  try {
    const { data } = yield call(orderService.fetchOrders)
    yield put(setOrders(data))
  } catch (e) {
    console.log(e)
  }
}

export function* makeOrder({ payload }) {
  try {
    yield call(orderService.makeOrder, {
      restaurantId: payload.restaurantId,
      foodOrders: payload.foodOrders
    })
    payload.clearCartAndNavigateToOrders()
  } catch (e) {
    console.log(e)
  }
}
