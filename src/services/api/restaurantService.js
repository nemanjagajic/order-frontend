import request from '../request'

const API_ENDPOINTS = {
  RESTAURANTS: '/api/restaurants/',
}

class AuthService {
  fetchRestaurants = () => {
    return request.get(API_ENDPOINTS.RESTAURANTS)
  }
}
export default new AuthService()
