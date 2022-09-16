import React from "react";
import HorizontalScroll from "react-horizontal-scrolling";

const Gallery = () => {
  const pictures = [
    {
      src: "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/banners/slider-02-1730x880.jpg",
    },
    {
      src: "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC05/image/cache/catalog/demo/banners/slider-02-1580x730.jpg",
    },
    {
      src: "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC05/image/cache/catalog/demo/banners/slider-01-1580x730.jpg",
    },
  ];


  return (
    <div className="p-[1rem]">
      <HorizontalScroll>
        {pictures.map((pic , index) => (
          <img
            className="rounded w-[100vw] h-[100vh] object-cover"
            src={pic.src}
            key={index}
          />
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default Gallery;
