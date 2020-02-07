import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchRestaurant,
  fetchRestaurantFoods,
  setOpenedRestaurant,
  setRestaurantFoods
} from '../store/restaurants/restaurantActions'
import Pin from 'react-ionicons/lib/IosPinOutline'

const RestaurantDetails = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const restaurantId = props.match.params.id
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchRestaurantFoods(restaurantId))

    return () => {
      dispatch(setOpenedRestaurant(null))
      dispatch(setRestaurantFoods(null))
    }
  }, [dispatch, props.match.params.id])

  const restaurant = useSelector(state => state.restaurant.openedRestaurant)
  const foods = useSelector(state => state.restaurant.foods)

  return (
    <div>
      <Navbar />
      {restaurant && (
        <div className={'restaurant-details'}>
          <div className={'restaurant-title'}>{restaurant.name}</div>
          <div className={'restaurant-location'}>{restaurant.location}</div>
          <Pin className={'restaurant-pin'} color={'#42A5F5'} fontSize={'40px'} />
        </div>
      )}
    </div>
  )
}

export default RestaurantDetails
