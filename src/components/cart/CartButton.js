import React from 'react'
import { uiActions } from '../../store/uiSlice';
import { useDispatch, useSelector } from 'react-redux'
const CartButton = () => {
  const dispatch = useDispatch()

  const cartQuantity = useSelector((state)=> state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <div>
<button type="button" className="btn btn-primary position-relative" onClick={toggleCartHandler}>
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartQuantity}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>


    </div>
  )
}

export default CartButton