import {FETCH_RESTAURANTS, SET_RESTAURANTS} from "./restaurantConstats";

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS
})

export const setRestaurants = payload => ({
  type: SET_RESTAURANTS,
  payload
})
