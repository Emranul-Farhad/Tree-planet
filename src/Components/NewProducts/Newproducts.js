import React from 'react'
import NProducts from './NProducts'
import Parallax from 'react-rellax'

const Newproducts = () => {

  const newproducts = [
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/products/11_b98d3b02-705e-460e-8f2b-9c56bd2f830e_600x800_crop_center.png?v=1570944271",
        id : "1",
        price: "$210"
    },
    {
        src : "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC06/image/cache/catalog/demo/product/03-385x501.jpg",
        id : "2",
        price: "$305"
    },
   
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/products/10_8527a50b-537e-4593-bd50-38b6c287a56e_600x800_crop_center.png?v=1570944271",
        id : "4",
        price: "$425"
    },
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--1.png?v=1571551492",
        id : "3",
        price: "$200"
    },
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--2.png?v=1571551506",
        id : "5"
        ,
        price: "$300"
    },
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--4.png?v=1571551527",
        id : "6",
        price: "$400"
    },

  ]

  return (
   
    <div className='p-[3rem] mx-auto'>
       <div className='mb-[40px]'>
        <h3 className='text-center uppercase text-[20px] special '> Save extra 7% </h3>
       </div>
        <div className='flex gap-x-10 flex-col lg:flex-row'>
            <div className='mx-auto'>
                <img src="https://cdn.shopify.com/s/files/1/0274/5001/5849/files/000Banner-432x694_1e44fc54-cfbe-4939-871a-637fae939e34.png?v=1571565051" alt="" />
            </div>
         <div className='grid grid-cols-1 pt-[35px] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-5 gap-y-10 lg:gap-y-0'>
             {
                newproducts.map(img => <NProducts key={img.id}
                     Nprd={img} ></NProducts> )
             }
            </div>  
        </div>
    </div>
   
  )
}

export default Newproducts