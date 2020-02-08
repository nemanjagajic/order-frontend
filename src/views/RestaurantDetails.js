import React, { useEffect, useState, useCallback } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {
  clearOpenedRestaurant, clearRestaurantFoods,
  fetchRestaurant,
  fetchRestaurantFoods,
} from '../store/restaurants/restaurantActions'
import Pin from 'react-ionicons/lib/IosPinOutline'
import FoodList from '../components/FoodList'
import { HEADER_HEIGHT } from '../constants'

const RestaurantDetails = props => {
  const dispatch = useDispatch()

  const [selectedFood, setSelectedFood] = useState({})
  const [isNavVisible, setIsNavVisible] = useState(true)
  const isFoodSelected = Object.entries(selectedFood).length !== 0

  const restaurant = useSelector(state => state.restaurant.openedRestaurant)
  const foods = useSelector(state => state.restaurant.foods)

  useEffect(() => {
    const restaurantId = props.match.params.id
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchRestaurantFoods(restaurantId))

    return () => {
      dispatch(clearOpenedRestaurant())
      dispatch(clearRestaurantFoods())
    }
  }, [dispatch, props.match.params.id])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addFood = useCallback(foodId => {
    if (!selectedFood[foodId]) selectedFood[foodId] = 0
    selectedFood[foodId]++
    setSelectedFood(JSON.parse(JSON.stringify(selectedFood)))
  }, [selectedFood])

  const removeFood = useCallback(foodId => {
    if (!selectedFood[foodId]) return
    selectedFood[foodId]--
    if (selectedFood[foodId] === 0) delete selectedFood[foodId]
    setSelectedFood(JSON.parse(JSON.stringify(selectedFood)))
  }, [selectedFood])

  const handleScroll = () => {
    if (window.scrollY > HEADER_HEIGHT) setIsNavVisible(false)
    if (window.scrollY < HEADER_HEIGHT) setIsNavVisible(true)
  }

  const handleAddToCart = () => {
    const orderFoods = []
    for (const key in selectedFood) {
      const {id, name, price} = foods.find(f => key.toString() === f.id.toString())
      orderFoods.push({
        id,
        name,
        price,
        count: selectedFood[key]
      })
    }

    const cart = {
      ...JSON.parse(localStorage.getItem('cart')),
      [restaurant.id]: orderFoods
    }
    localStorage.setItem('cart', JSON.stringify(cart))

    setSelectedFood({})
  }

  const getItemsNumber = () => Object.values(selectedFood).reduce((a, b) => a + b)
  return (
    <div>
      <Navbar />
      {restaurant && (
        <div className={'restaurant-details'}>
          {isFoodSelected && (
            <div className={isNavVisible ? 'cart-buttons-wrapper-offset' : 'cart-buttons-wrapper'}>
              <button onClick={handleAddToCart} className={'add-button'}>
                {`Add to cart (${getItemsNumber()} ${getItemsNumber() === 1 ? 'item' : 'items'})`}
              </button>
              <button className={'clear-button'} onClick={() => setSelectedFood({})}>Clear</button>
            </div>
          )}
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
