import React from 'react'
import './product.css'
import {AiOutlineStar} from'react-icons/ai'
import {FaChalkboardTeacher} from'react-icons/fa'
import {BsFillPeopleFill} from'react-icons/bs'
import {Link} from 'react-router-dom'
export default function Product(props) {
  return (
    <div>


        <div className="products">
           
            <div className="product">
                <div ><img className="img-product" src={props.img} alt="" /></div>
                <div className="title-product my-5">
                    <p dir='rtl'>  {props.title}</p>
                </div>
              
              <div className="modares-div">
               
                <div className="icon-star">
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
                <div className="modares">
                     <p>{props.teacher}</p>
                     <FaChalkboardTeacher className='icon-teacher' />
                </div>
               
              </div>
              <div className="price-div">
     
                    <p>{props.price}</p>
               
                <div className="people">
                    <p>{props.count}</p>
                    <BsFillPeopleFill className='icon-people'/>
                </div>
              </div>
            
              <Link className='btn btn-dark btn-block w-100' to={`/product${props.id}` }>مشخصات</Link>
            </div>
        </div>
    </div>
  )
}
