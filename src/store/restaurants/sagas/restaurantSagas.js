import restaurantService from "../../../services/api/restaurantService";
import { call, put } from 'redux-saga/effects'
import {setRestaurants} from "../restaurantActions";


export function* fetchRestaurants() {
  try {
    const { data } = yield call(restaurantService.fetchRestaurants)
    yield put(setRestaurants(data))
  } catch (e) {
    console.log(e)
  }
}
