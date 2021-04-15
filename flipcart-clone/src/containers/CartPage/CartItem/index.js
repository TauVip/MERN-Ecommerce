const CartItem = props => {
  return (
    <div key={props.index} className='flexRow'>
      <div className='cartProductContainer'>
        <img src='' />
      </div>
      <div className='cartItemDetails'>
        <div>
          {props.cartItem.name} - qty - {props.cartItem.qty}
        </div>
        <div>Delivery in 3 - 5 days</div>
      </div>
    </div>
  )
}
export default CartItem
