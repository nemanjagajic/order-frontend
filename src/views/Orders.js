import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchOrders} from '../store/order/orderActions'
import OrderList from '../components/OrderList'
import Navbar from '../components/Navbar'

const Orders = () => {
  const dispatch = useDispatch()

  const orders = useSelector(state => state.order.orders)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className={'content-wrapper'}>
        <div className={'title'}>My Orders</div>
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default Orders;
