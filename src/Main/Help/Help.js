import React from 'react'

import './help.css'
export default function Help(props) {
  return (
    <div className='help-div'>
        <div dir='rtl' className="p-help">
            <p>{props.title2}</p>
            <p className='info-help'>{props.info}</p>
        </div>
       {props.icon} 
    </div>
  )
}
