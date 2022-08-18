import React from 'react'
import { NavLink} from 'react-router-dom';



const Nav = () => {
  return (
    <div>
     
        <div className='flex justify-between p-[2rem] uppercase helo text-3xl'>
            <NavLink to="/hydra" >  Menue </NavLink>
            <div className='special'>  FLIRTY FLOWERS </div>
            <div>  Cart </div>
        </div>
    </div>
  )
}

export default Nav