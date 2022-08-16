import React from 'react'
import { useParams } from 'react-router-dom'
import "./articlepage.css"
import {AiTwotoneStar} from'react-icons/ai'
import {AiOutlineStar} from'react-icons/ai'
import articleheader from './articlepagedata/articlepagedatas'
import Articletext from './component/Articletext'
export default function Articlepage() {
    let params= useParams()
    let mainarticledata = articleheader.find(text => text.id == params.articleid)
  return (
    <div className='mb-5'>
    <div className="maghaleheaderr-title">
    <p>{mainarticledata.title_article_header}</p>
    </div>
    <div className="container">
        <div className="maghale-header">
    
    
            <div className="img-maghale-header-div">
                <img  className="img-maghale-header"  src={mainarticledata.img_article_header} alt="" />
            </div>
    
    
    <div className="maghale-star-div" >
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
    <p>{mainarticledata.p1_article_header}</p>
    <p>{mainarticledata.p2_article_header}</p>
    </div>
           
        </div>
    </div>
    <hr className='mt-5' />

<Articletext  />
  
        </div>
  )
}
