import {MAKE_ORDER} from './orderConstants'

export const makeOrder = payload => ({
  type: MAKE_ORDER,
  payload
})
