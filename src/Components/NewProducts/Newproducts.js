import React from 'react'
import NProducts from './NProducts'


const Newproducts = () => {

  const newproducts = [
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/products/11_b98d3b02-705e-460e-8f2b-9c56bd2f830e_600x800_crop_center.png?v=1570944271",
        id : "1"
    },
    {
        src : "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC06/image/cache/catalog/demo/product/03-385x501.jpg",
        id : "2"
    },
   
    {
        src : "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC06/image/cache/catalog/demo/banners/category-img-01-350x391.jpg",
        id : "4"
    },
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--1.png?v=1571551492",
        id : "3"
    },
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--2.png?v=1571551506",
        id : "5"
    },
    {
        src : "https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--4.png?v=1571551527",
        id : "6"
    },

  ]

  return (
    <div className='p-[3rem]'>
       <div className='mb-[40px]'>
       <h3 className='text-center uppercase special '> new arrival  </h3>
        <h3 className='text-center uppercase text-[20px] special '> Save extra 7% </h3>
       </div>
        <div className='flex gap-x-10 flex-col md:flex-row'>
            <div className=''>
                <img src="https://cdn.shopify.com/s/files/1/0274/5001/5849/files/000Banner-432x694_1e44fc54-cfbe-4939-871a-637fae939e34.png?v=1571565051" alt="" />
            </div>
            <div className='grid grid-cols-1 pt-[30px] mx-auto md:grid-cols-3 '>
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