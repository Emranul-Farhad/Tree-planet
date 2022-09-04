import React from 'react'
import About from '../About/About'
import Features from '../Features/Features'
import Gallery from '../Gallery/Gallery'
import Nav from '../Header/Nav'
import Hero from '../Hero/Hero'
import LetterScene from '../Test/Lettertest'
import Test from '../Test/Test'
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
      <div>  
        <Gallery></Gallery>
      </div>    
      <div className='mt-[450px]'>
        <Type></Type>
      </div>
      <div>
        <Test></Test>
      </div>
      <div>
        <LetterScene></LetterScene>
      </div>
    </div>
  )
}

export default Home