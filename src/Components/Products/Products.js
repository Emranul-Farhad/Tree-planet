import React from "react";

const Products = ({ prd }) => {
  const { src, name, price } = prd;

  return (
    <div>
        <div className="containers">
        <img className="w-[307px] h-[307px] object-cover" src={src} alt="" />
        <div className="middle">
        <h3 className="font-extrabold font-mission text mt-[5px]">
          {" "}
          $ {price}{" "}
        </h3>
        </div>
        </div>

      <div className="flex justify-between items-center">
        <h3 className="font-extrabold mt-[5px] font-mission">
          {" "}
          Name : <span className="name">{name} </span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Products;
