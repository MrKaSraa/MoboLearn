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
       <Link to='/Emailbox'  className="link-hed "> تماس با ما </Link>
        
     
        <Link to='/Account'  className="link-hed">حساب من </Link >
        <Link to='/Createaccont'  className="link-hed "><span> <BsFillPersonFill className="icon-hed-1" />ورود/ثبت نام</span></Link >
        </div>
      

       

  
        <div className="p-header1 bg-light">
          
     <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("به آکادمی ما خوش آمدید")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("به آکادمی ما خوش آمدید")
  .pauseFor(1000)
  .deleteAll()
  .typeString("به آکادمی ما خوش آمدید")
  .pauseFor(1000)
  .deleteAll()
  .typeString("به آکادمی ما خوش آمدید")
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
          <Offcanvas.Title>منو</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    <div className="Offcanvas">
    <div className="icon-off">
    <AiOutlineHome   />
    <Link onClick={()=>setShow(false)} to='/' className="p-icon-hed-1">صفحه اصلی</Link>
 
   </div><hr />
   <div className="icon-off">
   <AiOutlineShoppingCart   />
    <Link onClick={()=>setShow(false)} to='/Order' className="p-icon-hed-2">سفارش ها</Link>
 
   </div><hr />
   <div className="icon-off">
  
 <FaShoppingBag   />
    <Link onClick={()=>setShow(false)} to='/Cart' className="p-icon-hed-2">سبد خرید</Link>
   </div>
   <hr />
   <div className="icon-off">
   <FiLogIn   />
    <Link onClick={()=>setShow(false)} to='/Login' className="p-icon-hed-2">ورود/ثبت نام</Link>
 
   </div>
   <hr />
      <Dropdown dir='rtl' className='drop-off'>
      <Dropdown.Toggle variant="light" >
      <span className='px-2'> فرانت اند</span>
      </Dropdown.Toggle>
<hr />
      <Dropdown.Menu className='drop-menu2'>
        <Link onClick={()=>setShow(false)} className='drop-offcenvas' to='/product4' >Html</Link ><br />
        <Link onClick={()=>setShow(false)} className='drop-offcenvas' to='/product3'>Css</Link >
     
      </Dropdown.Menu>
    </Dropdown><hr />
    <Dropdown dir='rtl' className='drop-off px-3'>
      <Dropdown.Toggle variant="light" >
      <span className='px-2'> بک اند</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu2'>
        <Link onClick={()=>setShow(false)} className='drop-offcenvas' to='/product1'>Django</Link><br />
        <Link onClick={()=>setShow(false)} className='drop-offcenvas' to='/product2'>Payton</Link>
     
      </Dropdown.Menu>
    </Dropdown>
  
  
     

    
    </div>

 

        </Offcanvas.Body>
      </Offcanvas>
 
</div>
<div className='icons-hed-2'>
   <div className="icon-hed-2">
   <FaShoppingBag   /><br />
    <Link to='/Cart' className="p-icon-hed-2">سبد خرید</Link>
 
   </div>
   <div className="icon-hed-2">
   <AiOutlineShoppingCart   /><br />
    <Link to='/Order' className="p-icon-hed-2">سفارش ها</Link>
 
   </div>
  
  
</div>


        <div className="link-header2">     
     
  
      <div className='dropdown'>
    

    <Dropdown className='Dropdown' dir='rtl'>
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
       <span className='px-2 span-dropdown'>بک اند</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">
        <Link  to='/product2' className='DropdownItem '  >payton</Link ><br />
        <Link   to='/product1' className='DropdownItem ' >django</Link >
  
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className='Dropdown' dir='rtl'>
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
       <span className='px-2 span-dropdown'>فرانت اند</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">
        <Link  to='/product4' className='DropdownItem ' >Html</Link><br />
        <Link  to='/product3' className='DropdownItem ' >Css</Link>
      
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='Dropdown' dir='rtl'>
      <Dropdown.Toggle variant="light" id="dropdown-split-basic">
       <span className='px-2 span-dropdown'>مقالات </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">
        <Link to='/article/2' className='DropdownItem ' >  ui و ux</Link><br />
        <Link to='/article/1' className='DropdownItem ' >   جاوا اسکریپت</Link>
      
      </Dropdown.Menu>
    </Dropdown>
  

      </div>
      <Link to='/' className='link-hed-safe mx-2' >صفحه اصلی</Link>
      <img src="https://unity.com/logo-unity-web.png" className='img-hed-new' width={150} alt="" />
       
        </div>

    </div>







    </div>
  )
}



