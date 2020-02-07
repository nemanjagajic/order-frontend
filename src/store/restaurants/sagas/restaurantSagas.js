import restaurantService from "../../../services/api/restaurantService";
import { call, put } from 'redux-saga/effects'
import {setOpenedRestaurant, setRestaurants} from '../restaurantActions'


export function* fetchRestaurants() {
  try {
    const { data } = yield call(restaurantService.fetchRestaurants)
    yield put(setRestaurants(data))
  } catch (e) {
    console.log(e)
  }
}

export function* fetchRestaurant({ payload }) {
  try {
    const { data } = yield call(restaurantService.fetchRestaurant, payload)
    yield put(setOpenedRestaurant(data))
  } catch (e) {
    console.log(e)
  }
}
