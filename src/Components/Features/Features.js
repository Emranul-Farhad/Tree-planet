import React from 'react'
import './Features.css'


const Features = () => {



    return (
        <div className='mt-[50px] mx-auto p-[3rem]'>
            <div className='main-feature items-center'>
                <div className='green'>
                    <h6 className='gr'> Tobs</h6>
                    <img src="https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100" alt="" />
                </div>
                <div className='lily'>
                <h6 className='li font-extrabold'> LILY </h6>
                    <img src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100" alt="" />
                    
                </div>
            </div>
        </div>
    )
}

export default Features