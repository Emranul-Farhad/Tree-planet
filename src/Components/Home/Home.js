import React from "react";
import About from "../About/About";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import Nav from "../Header/Nav";
import Hero from "../Hero/Hero";
import Newproducts from "../NewProducts/Newproducts";
import Prodcut from "../Products/Prodcut";
import Test from "../Test/Test";
// import Type from '../Typewriter/Type'

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <div className="mt-[120px]">
        <Features></Features>
      </div>
      <div className="mt-[50px]">
        <About></About>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
      <div className="mt-[70px]" >
        <Newproducts></Newproducts>
      </div>
      <div  className="mt-[80px]">
        <Prodcut></Prodcut>
      </div>
      {/* <div>
        <Test></Test>
      </div> */}
      <div></div>
    </div>
  );
};

export default Home;
