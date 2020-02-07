import request from '../request'

const API_ENDPOINTS = {
  RESTAURANTS: '/api/restaurants/',
}

class AuthService {
  fetchRestaurants = () => {
    return request.get(API_ENDPOINTS.RESTAURANTS)
  }

  fetchRestaurant = id => {
    return request.get(`${API_ENDPOINTS.RESTAURANTS}${id}`)
  }
}
export default new AuthService()
