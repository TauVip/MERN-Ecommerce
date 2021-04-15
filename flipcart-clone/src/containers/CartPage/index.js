import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import CartItem from './CartItem'
import { addToCart } from '../../actions'
import './style.css'

const CartPage = props => {
  const cart = useSelector(state => state.cart)
  const [cartItems, setCartItems] = useState(cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    setCartItems(cart.cartItems)
  }, [cart.cartItems])

  const onQuantityIncrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id]
    dispatch(addToCart({ _id, name, price, img }))
  }

  const onQuantityDecrement = (_id, qty) => {}

  return (
    <Layout>
      <div className='cartContainer'>
        <Card headerleft={`My Cart`} headerright={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
            />
          ))}
        </Card>
        <Card
          style={{
            width: '500px'
          }}
        >
          Price
        </Card>
      </div>
    </Layout>
  )
}
export default CartPage
