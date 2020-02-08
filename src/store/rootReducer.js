import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import restaurantReducer from "./restaurants/restaurantReducer";
import orderReducer from './order/orderReducer'

export default combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  order: orderReducer
})
