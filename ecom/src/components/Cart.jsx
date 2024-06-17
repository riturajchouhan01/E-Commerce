
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, updateCart } from '../Feature/CartSlice'
import { decrement, increment } from '../Feature/CartCountSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const handleRemove = (id) => {
    dispatch(removeProduct(id))
    dispatch(decrement())
  }

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    dispatch(updateCart(updatedCart))
  }

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    dispatch(updateCart(updatedCart))
  }

  const totalPrice = cart.reduce((acc, item) => {
    const itemTotal = item.price * (item.quantity || 1); 
    return acc + itemTotal;
  }, 0)

  return (
    <>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <ul className='cart-item'>
            <img src={item.image} alt="" className='cart-image' />
            <div className="card-name">
              <li className='cart-txt'>{item.title}</li>
            </div>
            <li className='cart-price'>Price: {item.price}</li>
            
            <button className='cart-btn'  onClick={() => handleDecrement(item.id)}>-</button> <h2>{item.quantity || 1}</h2>  
            <button className='cart-btn' onClick={() => handleIncrement(item.id)}>+</button>
            <button className='cart-btn' onClick={() => handleRemove(item.id)}>Remove</button>
          </ul>
        </div>
      ))}
      <h1>Total billing Price: {totalPrice}</h1>
    </>
  )
}

export default Cart

