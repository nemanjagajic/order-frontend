import React from 'react'
import Pin from 'react-ionicons/lib/IosPinOutline'
import { useHistory } from 'react-router'

const RestaurantItem = ({ restaurant }) => {
  const history = useHistory()

  return (
    <div onClick={() => history.push(`/restaurants/${restaurant.id}`)} className={'restaurant-item'}>
      <div className={'restaurant-title'}>{restaurant.name}</div>
      <div className={'restaurant-location'}>{restaurant.location}</div>
      <Pin className={'restaurant-pin'} color={'#42A5F5'} fontSize={'40px'} />
    </div>
  )
}

export default RestaurantItem
