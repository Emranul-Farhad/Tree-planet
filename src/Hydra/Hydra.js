import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import {BiCloudDownload} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import Heros from "./Heros";


const Hydra = () => {
  return (
    <div className="bg-[#0d211c86]">
      <div className="navbar bg-[#0db68c91] p-[.5rem] px-10">
        <div className="flex-1 items-center ">
          <img src={logo} alt="" className="w-12" />
          <a className="mx-1 btn btn-ghost normal-case  font-[hack] font-[300] text-white text-2xl ">
             Hydra Flasher </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-4xl text-primary " ><BiCloudDownload></BiCloudDownload> </a>
            </li>
            <li>

              <a className="text-3xl text-primary" > <CgProfile></CgProfile> </a>
            </li>

            {/* login button  */}
            <li>
              <NavLink to="/login" className='font-[hack] text-white text-[300] text-2xl ' > Login </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Heros></Heros>
    </div>
  );
};

export default Hydra;
