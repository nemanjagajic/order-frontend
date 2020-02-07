import { all, takeLatest } from 'redux-saga/effects'
import {FETCH_RESTAURANT, FETCH_RESTAURANT_FOODS, FETCH_RESTAURANTS} from '../restaurantConstats'
import {fetchRestaurant, fetchRestaurantFoods, fetchRestaurants} from './restaurantSagas'

export default function* restaurantSaga() {
  yield all([
    takeLatest(FETCH_RESTAURANTS, fetchRestaurants),
    takeLatest(FETCH_RESTAURANT, fetchRestaurant),
    takeLatest(FETCH_RESTAURANT_FOODS, fetchRestaurantFoods),
  ])
}
