import React, { useState } from 'react'
import moment from 'moment'

const OrderItem = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false)

  const totalSum = () => {
    return order.foods
      .map(f => f.count * f.price)
      .reduce((a, b) => a + b)
  }

  return (
    <div className={'order-item'}>
      <div className={'order-title'}>{order.restaurant.name}</div>
      <div className={'item order-location'}>{order.restaurant.location}</div>
      <div className={'item order-date'}>{moment(order.created_at).format('MMMM Do YYYY, h:mm a')}</div>
      <div className={'item order-status'}>{order.status}</div>
      <button className={'details-button'} onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails && order.foods.map(food => (
        <div className={'item content'} key={food.id}>
          <div>{`x${food.count} ${food.name}`}</div>
          <div>{`${food.price * food.count} din`}</div>
        </div>
      ))}
      <div className={'content-bottom'}>
        <div>Total</div>
        <div>{`${totalSum()} din`}</div>
      </div>
    </div>
  )
}

export default OrderItem
