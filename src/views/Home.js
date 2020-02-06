import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store/auth/authActions'
import {fetchRestaurants} from '../store/restaurants/restaurantActions'
import Navbar from '../components/Navbar'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurant.restaurants)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <Navbar handleLogout={handleLogout}/>
      <div className={'content-wrapper'}>
        <div className={'title'}>Restaurants</div>
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Home;
