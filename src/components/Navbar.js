import React from 'react';
import {logOut} from '../store/auth/authActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


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
        <div className={'item'} onClick={handleLogout}>Logout</div>
      </div>
    </div>
  )
}

export default Navbar
