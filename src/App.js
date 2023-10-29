import React from 'react'
import Cart from './components/cart/Cart'
import {useSelector} from 'react-redux'
import Navbar from './components/Navbar';
import Products from './components/Products';
const App = () => {

    const showCart = useSelector((state)=> state.ui.cartIsVisible);

  return (
    <>
      <Navbar />
      <h1>App.js file</h1>
      {/* <Products /> */}
      
      {showCart && <Cart />}
    </>
  )
}

export default App 