import {
  CLEAR_OPENED_RESTAURANT, CLEAR_RESTAURANT_FOODS,
  FETCH_RESTAURANT, FETCH_RESTAURANT_FOODS,
  FETCH_RESTAURANTS,
  SET_OPENED_RESTAURANT,
  SET_RESTAURANT_FOODS,
  SET_RESTAURANTS
} from './restaurantConstats'

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

export const clearOpenedRestaurant = () => ({
  type: CLEAR_OPENED_RESTAURANT
})

export const fetchRestaurantFoods = payload => ({
  type: FETCH_RESTAURANT_FOODS,
  payload
})

export const setRestaurantFoods = payload => ({
  type: SET_RESTAURANT_FOODS,
  payload
})

export const clearRestaurantFoods = () => ({
  type: CLEAR_RESTAURANT_FOODS
})
