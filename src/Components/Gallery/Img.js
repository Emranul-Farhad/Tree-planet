import React from 'react'



const Img = ({ig}) => {
    
  return (
    <div>
        <img className='w-[100vw] h-[100vh]' src={ig.src} alt="" />
    </div>
  )
}

export default Img