import React from "react";


const NProducts = ({ Nprd }) => {

  const { src,price} = Nprd;

  return (
    <div className="">
      <img className="h-[324px] object-cover sm:max-w-sm md:max-w-md lg: mx-w-lg" src={src} alt="" />{" "}
      <h3 className="font-extrabold font-mission mt-[5px]"> Price : {price} </h3>
    </div>
  );
};

export default NProducts;
