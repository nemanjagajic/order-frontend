import {FETCH_RESTAURANT, FETCH_RESTAURANTS, SET_OPENED_RESTAURANT, SET_RESTAURANTS} from './restaurantConstats'

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS
})

export const setRestaurants = payload => ({
  type: SET_RESTAURANTS,
  payload
})

export const fetchRestaurant = payload => ({
  type: FETCH_RESTAURANT,
  payload
})

export const setOpenedRestaurant = payload => ({
  type: SET_OPENED_RESTAURANT,
  payload
})
