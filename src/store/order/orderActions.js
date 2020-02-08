import {FETCH_ORDERS, MAKE_ORDER, SET_ORDERS} from './orderConstants'

export const fetchOrders = () => ({
  type: FETCH_ORDERS
})

export const setOrders = payload => ({
  type: SET_ORDERS,
  payload
})

export const makeOrder = payload => ({
  type: MAKE_ORDER,
  payload
})
