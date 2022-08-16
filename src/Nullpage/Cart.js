import React from 'react'
import Notfound from '../404 not found/Not found'
import { useState } from 'react'
export default function Cart() {
    const [messages,setmessage] =useState({
        message:'سبد خرید شما خالی است',
        btn:'صفحه اصلی',
        link:'/'
    })
  return (
    <div>
        <Notfound  {...messages} />
    </div>
  )
}
