import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './views/Home'
import Auth from './views/auth/Auth'
import RestaurantDetails from './views/RestaurantDetails'
import Cart from './views/Cart'
import Orders from './views/Orders'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <PrivateRoute path={'/restaurants/:id'} component={RestaurantDetails} />
        <PrivateRoute path={'/cart'} component={Cart} />
        <PrivateRoute path={'/orders'} component={Orders} />
      </Switch>
    </div>
  )
}

export default App
