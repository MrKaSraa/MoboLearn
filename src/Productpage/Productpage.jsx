import React from 'react'
import './productpage.css'
import { useParams } from 'react-router-dom'
import productpagedata from './datas/productpagedata'
import Introicons from '../introproduct/Introicons'
import Introtext from '../introproduct/Introtext'
export default function Productpage() {
  let params= useParams()
   

  let mainproductdata = productpagedata.find(text => text.id == params.productid)
  return (
    <div>  
       <div>

       <div className="introduction">
      <div className="img-intro-div">
        <img src={mainproductdata.img_header} className='img-intro' alt="" />
      </div>
      <div className="text-intro">
      <p  className='p-first-intro'>{mainproductdata.text_header1}</p>
      <p>{mainproductdata.text_header2}</p>
      <p>{mainproductdata.text_header3}</p>
      </div>
    </div>
    
    <hr className='my-5'/>
    <div id='intro-icons-div' className='first-div-icons-intro mx-lg-5'data-aos="fade-down">
      <Introicons />
    </div>
    <Introtext />
      </div>
  </div>
  )
}
