import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchRestaurants} from '../store/restaurants/restaurantActions'
import Navbar from '../components/Navbar'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurant.restaurants)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className={'content-wrapper'}>
        <div className={'title'}>Restaurants</div>
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Home;
