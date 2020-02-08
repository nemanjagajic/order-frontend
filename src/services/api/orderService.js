import request from '../request'

const API_ENDPOINTS = {
  ORDER_FOOD: 'api/restaurants/{id}/order',
  ORDERS: 'api/orders'
}

class AuthService {
  fetchOrders = () => {
    return request.get(API_ENDPOINTS.ORDERS)
  }

  makeOrder = ({ restaurantId, foodOrders }) => {
    return request.post(API_ENDPOINTS.ORDER_FOOD.replace('{id}', restaurantId), {
      order_foods: foodOrders.map(food => ({
        food_id: food.id,
        count: food.count
      }))
    })
  }
}
export default new AuthService()
