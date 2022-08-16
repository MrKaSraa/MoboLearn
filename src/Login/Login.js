import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='form-bg'>
       
   <br />
   <br />

   <form className='formLogin' action="">
    <div className="login-title">
    <h4 >ورود به حساب</h4>
   </div>
    <input placeholder='نام کاربری' className='inputform' type="text" name="" id="" />
    <input placeholder='رمز عبور' className='inputform' type="text" name="" id="" />
    <button className='btn btn-log btn-dark mt-3'>ورود</button>

    <div className="not-mem pt-4">
        <p>عضو نیستید؟</p>
        <Link to='/Createaccont' className='text-primary px-1'>ساخت اکانت</Link>
    </div>

   </form>
 
</div>
     
  
 
  )
}
