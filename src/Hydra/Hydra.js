import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/hacker.png'


const Hydra = () => {


    return (
        <div className='p-[2rem]'>
            <div className="navbar">
                <div className="flex-1 items-center">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl w-[100px]"> <img src={logo} alt="" /> </NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>  <NavLink to='/Download' className="btn bg-[#00FFC3] border-0" > Download </NavLink> </li>
                        <li> <NavLink to='/login'> Login </NavLink>  </li>
                    </ul>
                </div>
            </div>
            <h1 className='mt-[50px] te text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate atque omnis. Dolor quidem expedita architecto temporibus voluptas fuga, reprehenderit exercitationem saepe quos veniam error velit? Id culpa dolorem, unde eos ullam qui similique deleniti error, natus molestias sit commodi!</h1>
        </div>
    )
}

export default Hydra