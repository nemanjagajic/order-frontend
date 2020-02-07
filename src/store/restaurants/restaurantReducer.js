import {SET_OPENED_RESTAURANT, SET_RESTAURANTS} from './restaurantConstats'

const initialState = {
  restaurants: [],
  openedRestaurant: null
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
    default:
      return state
  }
}
