import React from 'react'
import second from './Images/illustration-features-tab-1.svg'

const Click = () => {
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
                Organize your bookmarks however you like. Our simple grag-and-drop interface gives you complete control over how you manage your favourite sites.
            </p>
            <button className='info'>More info</button>
            {/* <a className='info' href=""> More info</a> */}
        </section>
    

    </div>
  )
}

export default Click