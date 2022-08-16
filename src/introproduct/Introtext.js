import React from 'react'
import { useParams } from 'react-router-dom'
import textdata from '../Productpage/datas/textdata'
import '../introproduct/introtext.css'
 function Introtext() {
    let params= useParams()
   

    let maintextdata = textdata.find(text => text.id == params.productid)
  return (
    <div >
      {maintextdata.items.map(item =>(
        <>
          <div  className="text-title mt-8"  data-aos="fade-up">
            <p>{item.title}</p>
        </div>
        <hr />
        <div className="text-intro-text" data-aos="fade-up">
          <p>{item.text1}</p>
        <p>{item.text2}</p>
        </div>
        
        <div className="img-textintro my-5" data-aos="fade-up">
         <img  src={item.img} className='img-text-intro' alt="" />
        </div>
        </>
      ))}
      
       
    </div>
  )
}
export default Introtext