import React from 'react'
import './Hero.css'
import her from './Images/illustration-hero.svg'



const Hero = () => {
  let manager='A Simple Bookmark Manager'

  let clean='A clean and simple interface to prganize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.'


  



  return (
    <div className='hero'>
        <section className='sec'>
            <h1>{manager}</h1>
            <p className='clean'>{clean}</p>
            
            <a className='browse' href="">Get it on Chrome</a>
            <a className='browse' href="">Get it on Firefox</a>
        </section>

        <section className='sec2'>
            <img className='heroimage' src={her} alt="" /> 
           {/* Empty div */}
            <div className='rub'>  </div>
        </section>
           


    </div>
  )
}

export default Hero