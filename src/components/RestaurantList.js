import React from 'react'
import RestaurantItem from './RestaurantItem'

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default RestaurantList
