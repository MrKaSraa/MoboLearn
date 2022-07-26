import React from 'react'
import './maghaletext.css'
export default function (props) {
  return (
    <div data-aos="fade-up">

        <div className="title-maghale-text">
            <p>{props.title_maghale_text}</p>
        </div>

<div className="container" >
          <div className="p-maghale-text"  data-aos="fade-up">
<p>{props.p_maghale_text}</p>
        </div>
</div>
 

    </div>
  )
}
