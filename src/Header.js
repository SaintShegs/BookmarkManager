import React from 'react'
import book from './Images/logo-bookmark.svg'

const Header = () => {
  return (
    <div className='navba'>

        <img src={book} alt="" />


       <ul>
           <li> <a className='navi' href="">FEATURES</a> </li>
           <li> <a className='navi' href="">PRICING</a> </li>
           <li> <a className='navi' href="">CONTACT</a> </li>
           <li> <a className='navi' href="">LOGIN</a> </li>
       </ul>
                       
       <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
     </div>    
                        
                        
    </div>
  )
}

export default Header