import React from 'react'
import Scroll from '../../TestScroll/Scroll'
import About from '../About/About'
import Features from '../Features/Features'
import Nav from '../Header/Nav'
import Hero from '../Hero/Hero'
import Type from '../Typewriter/Type'






const Home = () => {
  return (
    <div>
        <Nav></Nav>
      <Hero></Hero>
      <div className='mt-[120px]'>
        <Features></Features>
      </div>
      <div className='mt-[50px]'>
        <About></About>
      </div>
      <p className='text-end p-[2rem]' >gallery</p>
      {/* <div className='mt-[100px]'>
        <Gallery></Gallery>
      </div> */}
      <div className='mt-[450px]'>
        <Type></Type>
      </div>
      <div className='mt-[100px]'>
        <Scroll></Scroll>
      </div>
    </div>
  )
}

export default Home