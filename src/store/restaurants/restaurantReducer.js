import {
  CLEAR_OPENED_RESTAURANT, CLEAR_RESTAURANT_FOODS,
  SET_OPENED_RESTAURANT,
  SET_RESTAURANT_FOODS,
  SET_RESTAURANTS
} from './restaurantConstats'

const initialState = {
  restaurants: [],
  openedRestaurant: null,
  foods: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      }
    case SET_OPENED_RESTAURANT:
      return {
        ...state,
        openedRestaurant: action.payload
      }
    case CLEAR_OPENED_RESTAURANT:
      return {
        ...state,
        openedRestaurant: null
      }
    case SET_RESTAURANT_FOODS:
      return {
        ...state,
        foods: action.payload
      }
    case CLEAR_RESTAURANT_FOODS:
      return {
        ...state,
        foods: []
      }
    default:
      return state
  }
}
