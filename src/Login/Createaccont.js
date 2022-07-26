import React from 'react'
import { Link } from 'react-router-dom'
export default function Createaccont() {
  return (
    <form className='formLogin' action="">
    <div className="login-title">
    <h4>ساخت اکانت</h4>
   </div>
    <input placeholder='نام کاربری' className='inputform' type="text" name="" id="" />
    <input placeholder='شماره موبایل' className='inputform' type="text" name="" id="" />
    <input placeholder='رمز عبور' className='inputform' type="text" name="" id="" />
    <button className='btn btn-log btn-dark mt-3'>ورود</button>

    <div className="not-mem pt-4">
        <p>قبلا ثبت نام کردید؟</p>
        <Link to='/Login' className='text-primary px-1'>ورود</Link>
    </div>

   </form>
  )
}
