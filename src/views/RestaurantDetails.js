import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {
  clearOpenedRestaurant, clearRestaurantFoods,
  fetchRestaurant,
  fetchRestaurantFoods,
} from '../store/restaurants/restaurantActions'
import Pin from 'react-ionicons/lib/IosPinOutline'
import FoodList from '../components/FoodList'

const RestaurantDetails = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const restaurantId = props.match.params.id
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchRestaurantFoods(restaurantId))

    return () => {
      dispatch(clearOpenedRestaurant())
      dispatch(clearRestaurantFoods())
    }
  }, [dispatch, props.match.params.id])

  const restaurant = useSelector(state => state.restaurant.openedRestaurant)
  const foods = useSelector(state => state.restaurant.foods)

  const [selectedFood, setSelectedFood] = useState({})

  const addFood = foodId => {
    if (!selectedFood[foodId]) selectedFood[foodId] = 0
    selectedFood[foodId]++
    setSelectedFood(JSON.parse(JSON.stringify(selectedFood)))
  }

  const removeFood = foodId => {
    if (!selectedFood[foodId]) return
    selectedFood[foodId]--
    if (selectedFood[foodId] === 0) delete selectedFood[foodId]
    setSelectedFood(JSON.parse(JSON.stringify(selectedFood)))
  }

  return (
    <div>
      <Navbar />
      {restaurant && (
        <div className={'restaurant-details'}>
          <div className={'restaurant-title'}>{restaurant.name}</div>
          <div className={'restaurant-location'}>{restaurant.location}</div>
          <Pin className={'restaurant-pin'} color={'#42A5F5'} fontSize={'40px'} />
          <FoodList
            foods={foods}
            selectedFood={selectedFood}
            addFood={addFood}
            removeFood={removeFood}
          />
        </div>
      )}
    </div>
  )
}

export default RestaurantDetails
