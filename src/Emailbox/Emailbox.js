import React, { useState } from 'react'
import './Emailbox.css'
import {FaRegSmileWink}from 'react-icons/fa'
import {FaRegHandPointLeft}from 'react-icons/fa'
 export default function Emailbox() {


  const emailinput =document.querySelector('#emailinput')
  const nameinput =document.querySelector('#nameinput')
  const textinput =document.querySelector('#textinput')


  const submitform = function (params) {
   
    params.preventDefault();

let regexname=/\w+\-?\.?\w/
let regexName =regexname.test(nameinput.value)

let regexemail=/\w+\-?\d?@+\w{2,5}\.\w{2,3}/
let regexEmail =regexemail.test(emailinput.value)

let regextext=/\w+\.?\-?\s?/
let regexText =regextext.test(textinput.value)


if (regexText && regexEmail && regexName ) {
  alert('ایمیل با موفقیت ارسال شد')
}else{
  alert('ادرس ایمیل اشتباه است')
}
  }

  return (


    <div className='body-email' >
         <form class="email-box animate__animated animate__flash" onSubmit={submitform}>
            <h4 className='h4-email my-2'>ارتباط با ما</h4>
    <input   class="input-box" id="nameinput" placeholder="نام" type="text"/><br />
    <input  class="input-box" id="textinput" placeholder="متن" type="text"/><br />
    <input   class="input-box" id="emailinput" placeholder="آدرس ایمیل" type="text"/><br />
    <button  id="btn-email" type="submit" class="btn my-2 btn-light w-50 btn-block">ارسال</button>
  </form>

<div className="text-email"> 
  <p>جهت هرگونه انتقاد یا صحبت به ما ایمیل بزنید</p>
   
 
    <p>با ما در ارتباط باشید </p>
 
 <div className="smile-email">
         <FaRegSmileWink className='icon-smile-email' />
         <FaRegHandPointLeft className='icon-smile-email'/>
       
    </div>
   

</div>

    </div>
  )
}
