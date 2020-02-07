import request from '../request'

const API_ENDPOINTS = {
  RESTAURANTS: '/api/restaurants/',
  RESTAURANT_FOODS: '/api/restaurants/{id}/foods',
}

class AuthService {
  fetchRestaurants = () => {
    return request.get(API_ENDPOINTS.RESTAURANTS)
  }

  fetchRestaurant = id => {
    return request.get(`${API_ENDPOINTS.RESTAURANTS}${id}`)
  }

  fetchRestaurantFoods = id => {
    return request.get(API_ENDPOINTS.RESTAURANT_FOODS.replace('{id}', id))
  }
}
export default new AuthService()
