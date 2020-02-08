import React from 'react';
import {logOut} from '../store/auth/authActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Cart from 'react-ionicons/lib/IosCartOutline'


const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logOut())
  }

  const isCartFilled = () => localStorage.getItem('cart') !== '{}'

  return (
    <div className={'navbar'}>
      <div className={'left'}>
        <div className={'item'} onClick={() => history.push('/')}>Home</div>
        <div className={'item'} onClick={() => history.push('/orders')}>Orders</div>
      </div>
      <div className={'right'}>
        <div className={'cart'}>
          {isCartFilled() && <div className={'blue-dot'} />}
          <Cart onClick={() => history.push('/cart')} color={'#737373'} fontSize={'30px'} />
        </div>
        <div className={'item'} onClick={handleLogout}>Logout</div>
      </div>
    </div>
  )
}

export default Navbar
