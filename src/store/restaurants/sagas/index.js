import { all, takeLatest } from 'redux-saga/effects'
import {FETCH_RESTAURANT, FETCH_RESTAURANTS} from '../restaurantConstats'
import {fetchRestaurant, fetchRestaurants} from './restaurantSagas'

export default function* restaurantSaga() {
  yield all([
    takeLatest(FETCH_RESTAURANTS, fetchRestaurants),
    takeLatest(FETCH_RESTAURANT, fetchRestaurant),
  ])
}
