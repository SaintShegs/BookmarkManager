import React from 'react'
import { FaFacebookSquare,FaTwitter } from "react-icons/fa";
// import { FaFacebookSquare } from '@fortawesome/free-solid-svg-icons'

import foo from './Images/logo-bookmark.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
  return (
    <div className='foot'>

        <img src={foo} alt="" />


        {/* <ul className='last'> */}
            <li className='ag'><a className='footNavi' href="">Features</a></li>
            <li className='ag'><a className='footNavi' href="">Pricing</a></li>
            <li className='ag'><a className='footNavi' href="">Contact</a></li>
            
        {/* </ul> */}
        <div>

        <FaFacebookSquare className='fb'/>
         <FaTwitter className='fb'/>
            

        </div>
        
        
        {/* <FontAwesomeIcon icon={FaFacebookSquare} /> */}



        {/* <FontAwesomeIcon icon="fa-brands fa-facebook-square" /> */}

       




    </div>
  )
}

export default Footer