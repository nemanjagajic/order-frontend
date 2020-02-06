import { SET_RESTAURANTS } from './restaurantConstats'

const initialState = {
  restaurants: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      }
    default:
      return state
  }
}
