import React from 'react'
import book from './Images/logo-bookmark.svg'
import {Nav, Navbar,Container} from 'react-bootstrap'

const Header = () => {
  return (
    <div>

        {/* <img src={book} alt="" />


       <ul className='nav-menu'>
           <li className='nav-item'> <a className='nav-link' href="">FEATURES</a> </li>
           <li className='nav-item'> <a className='nav-link' href="">PRICING</a> </li>
           <li className='nav-item'> <a className='nav-link' href="">CONTACT</a> </li>
           <li className='nav-item'> <a className='nav-link' href="">LOGIN</a> </li>
       </ul>
                       
       <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
     </div>     */}
  <Navbar bg="light" expand="sm">
  <Container>
   <img src={book} alt="" />
        {/* <Navbar.Brand href="#home">{book}</Navbar.Brand> */}
      

      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#FEATURES">FEATURES</Nav.Link>
            <Nav.Link href="#PRICING">PRICING</Nav.Link>
            <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
            <Nav.Link href="#LOGIN">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
   
  </Container>
</Navbar>             
                        
    </div>
  )
}

export default Header