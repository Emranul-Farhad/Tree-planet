import React from 'react'
import Products from './Products'




const Prodcut = () => {
   
  const product = [
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/7.jpg?v=1642642662",
      price: "450" ,
      name : "Teos"
    },
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/5_6c58e567-34f2-41d9-b08c-c00b1c29c9b2.jpg?v=1642642862",
      price: "450" ,
      name : "Teos"
    },
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/14_34ede678-e031-4db7-919d-7ef5525d44ac.jpg?v=1642642581",
      price: "350" ,
      name : "Three"
    },
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/4_b9385419-dd7f-4302-b497-ba982ed638c3.jpg?v=1642642431",
      price: "254" ,
      name : "white"
    },
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1642643029",
      price: "352" ,
      name : "Hena"
    },
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/12_cceddd78-bf58-4279-86ae-c8e951694374.jpg?v=1642643210",
      price: "206" ,
      name : "Blue"
    },
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/6_beeb7f3b-e7de-4e97-9e02-7a21ff2d58c7.jpg?v=1642643267",
      price: "360" ,
      name : "flower red"
    },
   
    {
      src : "https://cdn.shopify.com/s/files/1/0623/1851/0296/products/2_549e7ffc-4f23-42ad-be41-2f52d7f1087e.jpg?v=1642642732",
      price: "360" ,
      name : "flower red"
    }
   
  ]


  return (
    <div className='p-[3rem] mx-auto'>
      <h3 className='uppercase mb-[50px] special text-end'>Best tobs for you </h3>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-7 gap-x-4'>
        {
          product.map(src => <Products prd={src} ></Products> )
        }
      </div>
    </div>
  )
}

export default Prodcut 