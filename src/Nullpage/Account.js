import React from 'react'
import Notfound from '../404 not found/Not found'
import { useState } from 'react'

export default function Account() {
    const [messages,setmessage] =useState({
        message:'شما در حال حاضر حسابی ندارید',
        btn:'ثبت نام',
        link:'/Login'
    })
    return (
    <div>
        <Notfound {...messages}/>
    </div>
  )
}
