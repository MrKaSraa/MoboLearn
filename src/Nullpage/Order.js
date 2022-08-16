import React from 'react'
import Notfound from '../404 not found/Not found'
import { useState } from 'react'
export default function Order() {
    const [messages,setmessage] =useState({
        message:'سفارشی ثبت نشده است',
        btn:'صفحه اصلی',
        link:'/'
    })
    return (
    <div>
        <Notfound {...messages} />
    </div>
  )
}
