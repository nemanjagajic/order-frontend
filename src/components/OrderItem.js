import React from 'react'

const OrderItem = ({ order}) => {
  return (
    <div>
      <div>{order.status}</div>
      <div>{order.created_at}</div>
      <div>{order.restaurant.name}</div>
      <div>{order.foods[0].name}</div>
    </div>
  )
}

export default OrderItem
