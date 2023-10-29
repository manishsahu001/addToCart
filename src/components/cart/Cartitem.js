import React from 'react'

import { useDispatch } from 'react-redux'
import {cartActions} from '../../store/cartSlice'

const Cartitem = (props) => {
  
  const {title, price, description, id} = props;
  const dispatch = useDispatch();

  const addToCart = ()=>{
      dispatch(cartActions.addItemToCart({
        id: id,
        title: title,
        description: description,
        price: price
      }))
  }

  const removeCart = ()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  return (
    <>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p>{price}</p>

          <button onClick={addToCart} >Add to cart</button>
          <button onClick={removeCart}>Remove From Cart</button>
        </div>
      </div>

    </>
  )
}

export default Cartitem