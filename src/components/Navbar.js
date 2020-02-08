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

  return (
    <div className={'navbar'}>
      <div className={'left'}>
        <div className={'item'} onClick={() => history.push('/')}>Home</div>
      </div>
      <div className={'right'}>
        <Cart className={'cart'} color={'#555'} fontSize={'30px'} />
        <div className={'item'} onClick={handleLogout}>Logout</div>
      </div>
    </div>
  )
}

export default Navbar
