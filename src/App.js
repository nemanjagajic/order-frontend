import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './views/Home'
import Auth from './views/auth/Auth'
import RestaurantDetails from './views/RestaurantDetails'
import Cart from './views/Cart'
import Orders from './views/Orders'

function App() {
  return (
    <div className='App'>
      <PrivateRoute exact path='/' component={Home} />
      <Route path='/auth' component={Auth} />
      <PrivateRoute path={'/restaurants/:id'} component={RestaurantDetails} />
      <PrivateRoute path={'/cart'} component={Cart} />
      <PrivateRoute path={'/orders'} component={Orders} />
    </div>
  )
}

export default App
