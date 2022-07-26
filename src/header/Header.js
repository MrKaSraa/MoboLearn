import'./header.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaShoppingBag} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiFillSetting} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {FiLogIn} from 'react-icons/fi'
import Typewriter from "typewriter-effect";

import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';

import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';


import {Link  } from 'react-router-dom'

export default function Header() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let date = new Date()
    

  return (
    <div >
    <div className="header-1 ">
  <div className="link-header1">   
       <Link to='/Emailbox'  className="link-hed link-hed-log"> تماس با ما </Link>
        <a href='#'  className="link-hed"> وبلاگ </a >
     
        <a href='#'  className="link-hed">حساب من </a >
        <Link to='/Createaccont'  className="link-hed link-hed-log"><span> <BsFillPersonFill className="icon-hed-1" />ورود/ثبت نام</span></Link >
        </div>
      

       

  
        <div className="p-header1 bg-light">
          
     <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("به فروشگاه ما خوش آمدید")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("به فروشگاه ما خوش آمدید")
  .pauseFor(1000)
  .deleteAll()
  .typeString("به فروشگاه ما خوش آمدید")
  .pauseFor(1000)
  .deleteAll()
  .typeString("به فروشگاه ما خوش آمدید")
  .pauseFor(1000)

  .start();
  }}
  /> 

        </div>
    </div>

    <div className="header-2">
    <div className='lunch'>
   <Button  variant="light" onClick={handleShow}>
      <AiFillSetting className='iconsetting' />
      </Button>




      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    <div className="Offcanvas">
    <div className="icon-off">
   <FaShoppingBag   />
    <a href='#' className="p-icon-hed-2">سبد خرید</a>
 
   </div><hr />
   <div className="icon-off">
   <AiOutlineShoppingCart   />
    <a href='#' className="p-icon-hed-2">سفارش ها</a>
 
   </div><hr />
   <div className="icon-off">
   <AiOutlineHome   />
    <Link to='/' className="p-icon-hed-2">صفحه اصلی</Link>
 
   </div>
   <hr />
   <div className="icon-off">
   <FiLogIn   />
    <Link to='/Login' className="p-icon-hed-2">ورود/ثبت نام</Link>
 
   </div>
   <hr />
      <Dropdown dir='rtl' className='drop-off'>
      <Dropdown.Toggle variant="light" >
      <span className='px-2'> فرانت اند</span>
      </Dropdown.Toggle>
<hr />
      <Dropdown.Menu className='drop-menu2'>
        <Link to='/Html' href="#/action-1">Html</Link ><br />
        <Link to='/Css' href="#/action-2">Css</Link >
     
      </Dropdown.Menu>
    </Dropdown><hr />
    <Dropdown dir='rtl' className='drop-off px-3'>
      <Dropdown.Toggle variant="light" >
      <span className='px-2'> بک اند</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu2'>
        <Link to='/Django'href="#/action-1">django</Link><br />
        <Link to='/Payton'href="#/action-2">payton</Link>
     
      </Dropdown.Menu>
    </Dropdown>
  
  
     

    
    </div>

 

        </Offcanvas.Body>
      </Offcanvas>
 
</div>
<div className='icons-hed-2'>
   <div className="icon-hed-2">
   <FaShoppingBag   /><br />
    <a href='#' className="p-icon-hed-2">سبد خرید</a>
 
   </div>
   <div className="icon-hed-2">
   <AiOutlineShoppingCart   /><br />
    <a href='#' className="p-icon-hed-2">سفارش ها</a>
 
   </div>
  
  
</div>


        <div className="link-header2">     
     
  
      <div className='dropdown'>
    

    <Dropdown dir='rtl'>
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
       <span className='px-2 span-dropdown'>بک اند</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">
        <Link to='/Payton' className='DropdownItem '  href="#/action-1">payton</Link ><br />
        <Link to='/Django' className='DropdownItem '  href="#/action-2">django</Link >
  
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown dir='rtl'>
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
       <span className='px-2 span-dropdown'>فرانت اند</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">
        <Link to='/Html' className='DropdownItem ' >Html</Link><br />
        <Link to='/Css' className='DropdownItem ' >Css</Link>
      
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown dir='rtl'>
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
       <span className='px-2 span-dropdown'>مقالات </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">
        <Link to='/Uiuxaricle' className='DropdownItem ' >  ui و ux</Link><br />
        <Link to='/javaarticle' className='DropdownItem ' >   جاوا اسکریپت</Link>
      
      </Dropdown.Menu>
    </Dropdown>
  

      </div>
      <Link to='/' className='link-hed-safe' >صفحه اصلی</Link>
      <img src="https://unity.com/logo-unity-web.png" className='img-hed-new' width={150} alt="" />
       
        </div>

    </div>








    {/* <Navbar dir='rtl' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse dir='rtl' id="navbarScroll">
          <Nav   className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }}   navbarScroll  >
          <Dropdown dir="rtl" as={ButtonGroup}>
      <Button variant="light">مقالات</Button>

      <Dropdown.Toggle dir='rtl' split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu className="drop-menu">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className="px-3" dir="rtl" as={ButtonGroup}>
      <Button variant="light">بک اند</Button>

      <Dropdown.Toggle dir='rtl' split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu className="drop-menu">
        <Dropdown.Item href="#/action-1">Payton</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Django</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown dir="rtl" as={ButtonGroup}>
      <Button variant="light">فرانت اند</Button>

      <Dropdown.Toggle dir='rtl' split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu className="drop-menu">
        <Dropdown.Item href="#/action-1">Html</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Css</Dropdown.Item>
    
      </Dropdown.Menu>
    </Dropdown>

           
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar> */}


    </div>
  )
}



