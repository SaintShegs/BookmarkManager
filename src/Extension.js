import React from 'react'
import chro from './Images/logo-chrome.svg'
import dots from './Images/bg-dots.svg'
import fire from './Images/logo-firefox.svg'
import opera from './Images/logo-opera.svg'


const Extension = () => {
  return (
    <div className='Apple down'>

    <h1>Download the extension</h1>

    <p className='aim'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd liKe us to prioritize.</p>

    <div className='browsers'>
        
        <div className='chrome'>
       <img src={chro} alt="" />
       <h3>Add to chrome</h3>
       <p>Minimum version 6.2</p>
       <img className='dot' src={dots} alt="" />
        <a href="" className='info install'>Add and install Extension</a>


        </div>




        <div className='firefox'>
            
        <img src={fire} alt="" />
        <h3>Add to firefox</h3>
        <p>Minimum version 5.5</p>
        <img className='dot' src={dots} alt="" />
        <a href="" className='info install'>Add and install Extension</a>
            
        </div>


        <section className='opera'>
            
        <img src={opera} alt="" />
        <h3>Add to Opera</h3>
        <p>Minimum version 4.6</p>
        <img className='dot' src={dots} alt="" />
        <a href="" className='info install'>Add and install Extension</a>    
            
            
        </section>

            
    </div>


    </div>
  )
}

export default Extension