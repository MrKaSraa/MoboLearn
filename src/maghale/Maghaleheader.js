import React from 'react'
import './maghaleheaderr.css'
import {AiTwotoneStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
export default function (props) {
  return (
    <div>
<div className="maghaleheaderr-title">
<p>{props.title_maghale_header}</p>
</div>
<div className="container">
    <div className="maghale-header">


        <div className="img-maghale-header-div">
            <img  className="img-maghale-header"  src={props.img_maghale_header} alt="" />
        </div>


<div className="maghale-star-div" data-aos="fade-up">
     <div className="maghale-star">
     <p>4/5 امتیاز از 5</p>
            <AiOutlineStar className='icon-maghale-star'/>
            <AiTwotoneStar className='icon-maghale-star'/>
            <AiTwotoneStar className='icon-maghale-star'/>
            <AiTwotoneStar className='icon-maghale-star'/>
            <AiTwotoneStar className='icon-maghale-star'/>

           
           
        </div>
</div>

<div className="text-maghale-header" data-aos="fade-up">
<p>{props.p1_maghale_header}</p>
<p>{props.p2_maghale_header}</p>
</div>
       
    </div>
</div>
<hr className='mt-5' />
    </div>
  )
}
