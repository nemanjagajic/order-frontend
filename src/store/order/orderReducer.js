import {SET_ORDERS} from './orderConstants'

const initialState = {
  orders: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    default:
      return state
  }
}
