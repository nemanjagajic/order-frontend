import { all } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import restaurantSaga from './restaurants/sagas'
import orderSaga from './order/sagas'

export default function* rootSaga() {
  yield all([authSaga(), restaurantSaga(), orderSaga()])
}
