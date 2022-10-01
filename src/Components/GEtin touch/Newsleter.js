import React from "react";
import Parallax from 'react-rellax'


const Newsleter = () => {


  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mx-auto p-[3rem]">
      <div className="grid grid-cols-1 justify-items-center gap-5 
       lg:w-1/2"   >
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-md text-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-md text-white"
            />
            <textarea
              className="textarea w-full max-w-md text-white"
              placeholder="Your message"
              rows={6}
            ></textarea>
            <button className=" mt-4 btn text-white font-bold bg-[#0D211C] ">
             click to fly  {" "}
            </button>
          </div>

       
        <div className="lg:w-1/2"   >
          <img
            src="https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-694x424.png?v=1571045004"
            alt=""
          />
        </div>
      </div>


    </div>
  );
};

export default Newsleter;
