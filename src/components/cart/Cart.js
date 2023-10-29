import React from 'react'
// import Cartitem from './Cartitem'
import Products from '../Products'

const Cart = () => {
  return (
    <>
      <div className="card w-75 mb-3 m-auto">
        <div className="card-body row m-auto w-50 my-2">
            <Products />
        </div>
      </div>

    </>
  )
}

export default Cart