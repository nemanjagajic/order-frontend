import { call } from 'redux-saga/effects'
import orderService from '../../../services/api/orderService'

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
