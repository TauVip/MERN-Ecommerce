import { cartConstants } from './constants'
import store from '../store'

export const addToCart = product => async dispatch => {
  const { cartItems } = store.getState().cart
  // const product = action.payload.product
  // const products = state.products
  const qty = cartItems[product._id]
    ? parseInt(cartItems[product._id].qty + 1)
    : 1
  cartItems[product._id] = { ...product, qty }

  localStorage.setItem('cart', JSON.stringify(cartItems))

  dispatch({
    type: cartConstants.ADD_TO_CART,
    payload: { cartItems }
  })
}

export const updateCart = () => async dispatch => {
  const cartItems =
    localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'))

  if (cartItems) {
    dispatch({
      type: cartConstants.ADD_TO_CART,
      payload: { cartItems }
    })
  }
}
