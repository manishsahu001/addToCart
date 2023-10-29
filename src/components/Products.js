import React from 'react'
import Cartitem from './cart/Cartitem'

const DUMMY_PRODUCTS = [
    {
        id: 'p0',
        price: 450,
        title: "First book",
        description: "First book i ever wrote"
    },
    {
        id: 'p1',
        price: 6600,
        title: "First book",
        description: "First book i ever wrote"
    },
    {
        id: 'p2',
        price: 4400,
        title: "First book",
        description: "First book i ever wrote"
    },
    {
        id: 'p3',
        price: 6030,
        title: "First book",
        description: "First book i ever wrote"
    },
    {
        id: 'p4',
        price: 6002,
        title: "First book",
        description: "First book i ever wrote"
    },
    {
        id: 'p5',
        price: 6001,
        title: "First book",
        description: "First book i ever wrote"
    },
    {
        id: 'p6',
        price: 60011,
        title: "First book",
        description: "First book i ever wrote"
    },
]
const Products = () => {



  return (
    <>  
        <h1>Products</h1>


        {DUMMY_PRODUCTS.map((item)=>{
            return <div key={item.id}><Cartitem id={item.id} title={item.title} description={item.description} price={item.price} /></div>
        })}
    </>
  )
}

export default Products