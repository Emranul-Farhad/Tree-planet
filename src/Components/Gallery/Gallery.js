import React from 'react'
import Img from './Img';



const Gallery = () => {

    const images = [
        // {
        //     src:
        //         "https://images.pexels.com/photos/8913244/pexels-photo-8913244.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title: "Dracaena Trifasciata",
        //     subtitle: "Live the Beauty",
        //     category: "Shooting / Adv.Campaing",
        // },
        // {
        //     src:
        //         "https://images.pexels.com/photos/7896514/pexels-photo-7896514.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title: "Cereus Penuvianus",
        //     subtitle: "Live the Beauty",
        //     category: "Shooting / Adv.Campaing",
        // },
        // {
        //     src:
        //         "https://images.pexels.com/photos/7906968/pexels-photo-7906968.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title: "Calliope",
        //     subtitle: "Live the Beauty",
        //     category: "Shooting / Adv.Campaing",
        // },
        // {
        //     src:
        //         "https://images.pexels.com/photos/129743/pexels-photo-129743.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title: "Golden Pothos",
        //     subtitle: "Living Room",
        //     category: "Shooting / Adv.Campaing",
        // },
    ];
    

  return (
    <>
     {
        images.map((ig , index) => 
          
         <Img ig={ig} ></Img> 
          )
     }
    </>
  )
}

export default Gallery

