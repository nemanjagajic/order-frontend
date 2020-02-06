import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import restaurantReducer from "./restaurants/restaurantReducer";

export default combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer
})
