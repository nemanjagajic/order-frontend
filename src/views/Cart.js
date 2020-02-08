import React, {useState} from 'react'
import Navbar from '../components/Navbar'

const Cart = () => {
  const [cart, setCart] = useState({ ...JSON.parse(localStorage.getItem('cart')) })

  const removeFromCart = restaurantId => {
    delete cart[restaurantId]
    const newCart = JSON.parse(JSON.stringify(cart))
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCart(newCart)
  }

  const renderCartItems = () => {
    const resultJsx = []

    Object.keys(cart).forEach(restaurantId => {
      let totalSum = 0
      const cartJsx = []
      cartJsx.push((
        <div key={cart[restaurantId][0].restaurantTitle} className={'cart-title'}>
          {cart[restaurantId][0].restaurantTitle}
        </div>
      ))
      cart[restaurantId].forEach(foodOrder => {
        totalSum += foodOrder.price * foodOrder.count
        cartJsx.push((
          <div key={foodOrder.id} className={'content'}>
            <div>{`x${foodOrder.count} ${foodOrder.name}`}</div>
            <div>={foodOrder.price * foodOrder.count} din</div>
          </div>
        ))
      })

      resultJsx.push((
        <div key={restaurantId} className={'cart-item'}>
          {cartJsx}
          <div className={'content-bottom'}>
            <div>Total</div>
            <div>{`=${totalSum} din`}</div>
          </div>
          <div>
            <button className={'order-button'}>Order</button>
            <button onClick={() => removeFromCart(restaurantId)} className={'remove-button'}>Remove</button>
          </div>
        </div>
      ))
    })

    return resultJsx
  }

  return (
    <div>
      <Navbar />
      <div className={'content-wrapper'}>
        <div className={'cart-title'}>Cart</div>
        {renderCartItems()}
      </div>
    </div>
  )
}

export default Cart
