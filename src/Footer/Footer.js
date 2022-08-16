import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {TbBrandTelegram} from 'react-icons/tb'
import {AiOutlineFacebook} from 'react-icons/ai'
export default function Footer() {

  return (
    <>
    <div className='footer-div'data-aos="fade-up" data-aos-duration="3000">
    <div className="icons-footer">
             <div className="iconsss">
             <BsInstagram className='icon-footer' />
                <FiTwitter className='icon-footer' />
                <AiOutlineFacebook className='icon-footer' />
                <TbBrandTelegram className='icon-footer' />
             </div>
<p>ما رو در شبکه های مجازی دنبال کنید تا از جدید ترین اخبار و تخفیفات آگاه شوید</p>
            </div>
  
   <div className="footerlinks">
       <div className="footer-link-1">
          <Link className='link-footer-class' to='/'>صفحه اصلی</Link>
        <Link className='link-footer-class' to='/product4'>آموزش Html</Link>
        <Link className='link-footer-class' to='/product2'>آموزش Payton</Link>
        <Link className='link-footer-class' to='/Login'>ورود / ثبت نام</Link>
      
       </div>
       <div className="footer-link-2">
         <Link className='link-footer-class' to='/Emailbox'>ارتباط با ما</Link>
       <Link className='link-footer-class' to='/product3'>آموزش Css</Link>
       <Link className='link-footer-class' to='/product1'>آموزش Django</Link>
      
       <Link className='link-footer-class' to='/Account'> حساب من</Link>
        </div>
    
        </div>
       
     
  <div className="footer-sidebar">
            <div className="brand-footer">
            <img src="https://unity.com/logo-unity-web.png" className='img-hed-2' width={'200px'} alt="" />
            </div>
          <div className="text-brand-footer">
          <p>سوالی دارید؟ تماس بگیرید</p>
            <p className='number-footer' >0904-641-7084</p>
            <p>با ما همراه باشید</p>
          </div>
           
        </div>
    </div>
  
    

    <div className="footer-akhar">
        <p className='p-akhar-footer p-akhar-footer1' dir='rtl'>کپی رایت © 1401  . تمامی حقوق محفوظ است.</p>
   
    </div>
    </>
  )
}
