import {SET_OPENED_RESTAURANT, SET_RESTAURANT_FOODS, SET_RESTAURANTS} from './restaurantConstats'

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
    case SET_RESTAURANT_FOODS:
      return {
        ...state,
        foods: action.payload
      }
    default:
      return state
  }
}
