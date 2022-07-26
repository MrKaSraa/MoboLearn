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

import {GiImperialCrown} from 'react-icons/gi'
import {AiOutlineBank}from'react-icons/ai' 

import { Swiper, SwiperSlide } from "swiper/react";

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
    
    const [prouduct,setprouduct]=useState([
        {title:' دوره پروژه محور متخصص جنگو + پروژه',teacher:'رضا دولتی',price:'2,100,000',count:'33',img:'https://sabzlearn.ir/wp-content/uploads/2022/06/django-852x479-1-360x180.png',product_link:'/Django'},
        {title:'آموزش پایتون    پیشرفته + پروژه های جذاب',teacher:'رضا دولتی',price:'1,900,000',count:'145',img:'https://sabzlearn.ir/wp-content/uploads/2022/01/Py-852x479-1-360x180.png',product_link:'/Payton'},
        {title:'آموزش رایگان HTML  +  پروژه های جذاب ',teacher:' امیر دینی',price:'!رایگان',count:'1,975',img:'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg',product_link:'/Html'},
        {title:'آموزش رایگان  Css +  پروژه های جذاب',teacher:'امیر دینی',price:'100,000',count:'1,608',img:'https://yadify.com/wp-content/uploads/2018/10/what-is-css-th.jpg',product_link:'/Css'},
    ]
    )
    const [help,sethelp]=useState([
        {title2:'دوره های اختصاصی',info:'با پشتیبانی و کیفیت بالا ارائه میده !',icon:<AiOutlineCopyrightCircle className='icon-help' />},
        {title2:'اجازه تدریس',info:'به هر مدرسی رو نمیده. چون کیفیت براش مهمه !',icon:<BiLike className='icon-help' />},
        {title2:'دوره پولی و رایگان',info:'براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده',icon:<AiOutlineBank className='icon-help-2 i2222' />},
        {title2:'اهمیت به کاربر',info:'اولویت اول و آخر این آکادمی اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست',icon:<GiImperialCrown className='icon-help-2' />},

    ]
    )
    const [article,setarticle]=useState([
      {link_article:'/javaarticle',title_article:'معرفی بهترین سایت آموزش جاوا اسکریپت',info_article:'جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند است که به واسطه فریم ورک‌های...',img_article:'https://sabzlearn.ir/wp-content/uploads/2022/04/best-site-for-js-shaxes-1-400x400.jpg' },
      {link_article:'/Uiuxaricle',title_article:'بررسی تفاوت ui و UI | ux بهتر است یا UX ؟',info_article:'همه کاربران فضای مجازی هنگام کار کردن با نرم‌افزار‌های مختلف با موارد متنوعی روبه‌رو...',img_article:'https://utec.ut.ac.ir/documents/10125/0/UIUX.png?t=1639812832215' },


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
   
        <div className="main-icon main-icon2">
        <FaUserGraduate  className='icon-main' />
        <p className="p-icon-main">5,000</p>
<p className="p-icon-main2">کاربر در سایت ثبت نام کردند</p>
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
                <Product {...prouduct[0]} />
                <Product {...prouduct[1]} />
                <Product {...prouduct[2]} />
               
                
                </div>
                <div className='products-div ' data-aos="fade-up">
                    <Product {...prouduct[2]} />
                <Product {...prouduct[3]} />
                <Product {...prouduct[1]} />
                
            
                
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
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide  className='my-5'> <Product {...prouduct[1]} /></SwiperSlide>
        <SwiperSlide  className='my-5'> <Product {...prouduct[3]} /></SwiperSlide>
        <SwiperSlide  className='my-5'> <Product {...prouduct[1]} /></SwiperSlide>
        <SwiperSlide  className='my-5'> <Product {...prouduct[3]} /></SwiperSlide>
      
      </Swiper>
   


<div className="article-title">
<h3 id='article-title'>محبوب ترین  مقالات</h3>
</div>


<div className="articles" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <Article {...article[0]}  />
  <Article {...article[1]} />
  <Article {...article[0]} />
</div>


 </>
   
  )
}
