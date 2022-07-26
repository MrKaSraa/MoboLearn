import React from 'react'
import './Introduction.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();
export default function Introduction(props) {
  return (
    <div >

     <div className='title-intro'>
        <p>{props.title_intro}</p>
</div>
        <div className="intro">



            <div className="img-div-intro px-lg-4" >
                <img src={props.img_intro}  className='img-intro' alt="" />
            </div>

 <div className="text-intro px-lg-2">
                <p>{props.p_intro1}</p>
                <p>{props.p_intro2}</p>
                <p>{props.p_intro3}</p>
            </div>

        </div>



    </div>
  )
}
