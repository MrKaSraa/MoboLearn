import React from 'react'

import './introicons.css'
export default function Introicons(props) {
  return (
    <div>

<div className="icons-intro">

<div className="div-icon-intro">
{props.icon_intro}
<div className="p-icon-intro">
    <p>{props.p1_intro_icon}</p>
    <p>{props.p2_intro_icon}</p>
</div>

</div>


    </div>

    </div>
  )
}
