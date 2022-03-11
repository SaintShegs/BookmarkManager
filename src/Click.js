import React, { useState } from 'react'
import second from './Images/illustration-features-tab-1.svg'

const Click = () => {

const [org,setOrg]=useState('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')

function switc () {
  if(org=='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.') {

    setOrg('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus accusantium voluptas omnis soluta, atque ut possimus dolor nemo ullam incidunt quis optio vel ipsum mollitia aliquid exercitationem repellendus voluptate?'
      )
  }
  else if (org=='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus accusantium voluptas omnis soluta, atque ut possimus dolor nemo ullam incidunt quis optio vel ipsum mollitia aliquid exercitationem repellendus voluptate?') {
    setOrg('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
  }
}




  return (
    <div className='hero'>

        <section className='sec2'>
            <img className='heroimage2' src={second} alt="" />
            <div className='rub2'>
            </div>

        </section>



        <section className='sec section2'>
            <h1>Bookmark in one click</h1>
            <p className='organize'>
                {org}
            </p>
            <button onClick={()=>{switc()}
            } className='info'>More info</button>
            {/* <a className='info' href=""> More info</a> */}
        </section>
    

    </div>
  )
}

export default Click