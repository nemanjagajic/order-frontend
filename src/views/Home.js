import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchRestaurants} from '../store/restaurants/restaurantActions'
import RestaurantList from '../components/RestaurantList'
import Navbar from '../components/Navbar'

const Home = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurant.restaurants)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  return (
    <div>
      <div className={'content-wrapper'}>
        <Navbar />
        <div className={'title'}>Restaurants</div>
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Home;
