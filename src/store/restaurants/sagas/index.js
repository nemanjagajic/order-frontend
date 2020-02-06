import { all, takeLatest } from 'redux-saga/effects'
import { FETCH_RESTAURANTS } from '../restaurantConstats'
import {fetchRestaurants} from './restaurantSagas'

export default function* restaurantSaga() {
  yield all([
    takeLatest(FETCH_RESTAURANTS, fetchRestaurants),
  ])
}
