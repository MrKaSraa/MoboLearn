import React from 'react'
import './introtext.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();
export default function Introtext(props) {
  return (
    <div>

    <div className="text-title  mt-5">
        <p>{props.titletintropro}</p>
    </div>
    <div className="container" data-aos="fade-up">
            
          
    <div className="text-intro-text">
     
        <p>{props.textintro1}</p>
        <p>{props.textintro2}</p>
    </div>

<div className="img-text-intro-div">
    <img src={props.imgintrotext} className='img-text-intro' alt="" />
</div>


  </div>
<hr className='mt-5' />
    </div>
  )
}
