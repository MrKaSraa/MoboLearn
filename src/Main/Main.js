import React from 'react'
import './Main.css'
import { useState,useRef } from 'react';
import Product from './product/Product'
import Article from './Article/Article'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaSearch} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'
import {AiOutlineFieldTime} from 'react-icons/ai'
import Help from './Help/Help'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BiLike} from 'react-icons/bi'
import {dataproduct1} from './product/dataproduct'
import {dataproduct2} from './product/dataproduct'
import {GiImperialCrown} from 'react-icons/gi'
import {AiOutlineBank}from'react-icons/ai' 
import {artclesss} from './product/dataproduct'
import { Swiper, SwiperSlide } from "swiper/react";
import {swiperslides} from './product/dataproduct'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import './swiper.css'

// import required modules
import { FreeMode, Pagination } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Main() {
  const [prouducts2,setprouducts2]=useState(dataproduct2)
  const [artcless,setartcless]=useState(artclesss)
    const [prouducts,setprouducts]=useState(dataproduct1)
    const [swiperslidesss,setswiperslidesss]=useState(swiperslides)
    const [help,sethelp]=useState([
       

{title2:'دوره های اختصاصی',info:'با پشتیبانی و کیفیت بالا ارائه میده !',icon:<AiOutlineCopyrightCircle className='icon-help' />},
{title2:'اجازه تدریس',info:'به هر مدرسی رو نمیده. چون کیفیت براش مهمه !',icon:<BiLike className='icon-help' />},
{title2:'دوره پولی و رایگان',info:'براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده',icon:<AiOutlineBank className='icon-help-2 i2222' />},
{title2:'اهمیت به کاربر',info:'اولویت اول و آخر این آکادمی اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست',icon:<GiImperialCrown className='icon-help-2' />},

    ]
    )

  return (
    <>
     <div className='main-background'>
     <br />
        <div className="title-main-div">
        <h3 className='title-main'>ما به هر قیمتی آموزش تولید نمیکنیم</h3>
        </div>

<div className='input-main-div'>
     <InputGroup className="mb-3 inputtt">
        <button  id="basic-addon1"><FaSearch/> </button>
        <Form.Control
        dir="rtl"
          placeholder="چی دوست داری یاد بگیری؟"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className=' input-main'
        />
      </InputGroup>
</div>

<div className="main-icon-div">
    <div className="main-icon">
<AiOutlineFieldTime className='icon-main' />
<p className="p-icon-main">1,000</p>
<p className="p-icon-main2">دقیقه آموزش</p>
    </div>
   
        <div className="main-icon main-icon2 mx-2">
        <FaUserGraduate  className='icon-main' />
        <p className="p-icon-main">5,000</p>
<p className="p-icon-main2">کاربر ثبت نام کردند</p>
        </div> 
        <div className="main-icon">
        <BsBook className='icon-main' />
        <p className="p-icon-main">6</p>
<p className="p-icon-main2">دوره آموزشی داریم</p>
        </div>
</div>
       
    </div>
  
    <div className="producs-title">
                <h3 id='product-title'>همه ی دوره ها</h3>
            </div>

            <div className='products-div' data-aos="fade-up">
              
               {prouducts.map(productt=>(
                 <Product {...productt} />
             
               ))}
                
                </div>
                <div className='products-div ' data-aos="fade-up">
                {prouducts2.map(productt=>(
                 <Product {...productt} />
             
               ))}
                
                
            
                
                </div>

                <div className="help-title">
                <h3 id='help-title'>ما چه کمکی بهتون میکنیم؟</h3>
            </div>

<div className="helps-div" data-aos="fade-right">
            <Help {...help[0]} />
            <Help {...help[1]} />
</div>
<div className="helps-div" data-aos="fade-right">
            <Help {...help[2]}  />
            <Help {...help[3]} />
</div>


  <div className="slider-title">
                <h3 id='slider-title'>محبوب ترین دوره ها</h3>
            </div>

<Swiper
 data-aos="fade-up"
        slidesPerView={3}
        spaceBetween={-30}
        rewind={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
      
        <SwiperSlide  className='my-5'><Product {...swiperslidesss[0]}/></SwiperSlide>
        <SwiperSlide  className='my-5'><Product {...swiperslidesss[1]}/></SwiperSlide>
        <SwiperSlide  className='my-5'><Product {...swiperslidesss[2]}/></SwiperSlide>
        <SwiperSlide  className='my-5'><Product {...swiperslidesss[3]}/> </SwiperSlide>
        <SwiperSlide  className='my-5'><Product {...swiperslidesss[1]}/></SwiperSlide>
      </Swiper>
   


<div className="article-title">
<h3 id='article-title'>محبوب ترین  مقالات</h3>
</div>


<div className="articles mb-5" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      {artcless.map( art=>(
<Article {...art}/>
      )
        
 )}

</div>


 </>
   
  )
}
