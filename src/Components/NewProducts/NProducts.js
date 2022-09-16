import React from "react";


const NProducts = ({ Nprd }) => {

  const { src, id } = Nprd;

  return (
    <div className="">
      <img className="h-[324px] object-cover" src={src} alt="" />{" "}
    </div>
  );
};

export default NProducts;
