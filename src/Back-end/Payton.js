import React from 'react'
import './payton.css'
import Introduction from '../introproduct/Introduction'
import Introicons from'../introproduct/Introicons'
import Introtext from '../introproduct/Introtext'
import { useState } from 'react'
import Introproduct from '../Main/product/Product'
import {AiOutlineExperiment}from 'react-icons/ai'
import {AiOutlineFieldTime}from 'react-icons/ai'
import {AiOutlineCalendar}from 'react-icons/ai'
import {BiSupport}from 'react-icons/bi'
import {BsInfo}from 'react-icons/bs'
import {FiPlayCircle}from 'react-icons/fi'
export default function Payton() {
  const[intropayton,setintroHtml]=useState(
    {img_intro:'https://roocket.ir/public/image/2018/9/15/python-1.jpg',
    title_intro:'آموزش  رایگان  پایتون مقدماتی تا پیشرفته + پروژه های جذاب',
     p_intro1:'حیف نیست محبوب ترین زبان برنامه نویسی دنیا رو  ناقص و بی هدف یادبگیری؟ ما تصمیم داریم دوره رایگان پایتون رو به نحوی آموزش بدیم که کامل ترین دوره آموزشی، هم در مقایسه با دوره های خارجی و هم در مقایسه با دوره های داخلی باشه و همه ی تجربه های تلخت رو از یادگیری برنامه نویسی بشوره ببره! ',
     p_intro2:'این آموزش از زیر صفر و پایه ترین مبحث شروع میشه تا تخصصی ترین و پیشرفته ترین مباحث، هر قسمت کلی پروژه و تمرین حل می کنیم، برات تکلیف مشخص می کنیم، کاربردشو تو دنیای واقعی نشون میدیم و در آخر…؛',
     p_intro3:'این یعنی یک دوره صفر تا نزدیکای صد پایتون! این دوره کاملا رایگان برای شما ارائه میشه! در ادامه به طور کامل راجع به آموزش (Python)   توضیحات کامل می­دهیم.'  
    }
  )

   const [introicon,setintroicon]=useState([
    {p1_intro_icon:'وضعیت دوره:',p2_intro_icon:'درحال پیش فروش',icon_intro:<AiOutlineExperiment className='icon-intro ' />},
    {p1_intro_icon:'مدت زمان دوره :',p2_intro_icon:'بین ۱۰۰ الی ۱۵۰ ساعت',icon_intro:<AiOutlineFieldTime className='icon-intro' />},
    {p1_intro_icon:'اخرین بروزرسانی:',p2_intro_icon:'1401/4/29',icon_intro:<AiOutlineCalendar className='icon-intro' />},
    {p1_intro_icon:'روش پشتیبانی:',p2_intro_icon:'به صورت انلاین',icon_intro:<BiSupport className='icon-intro' />},
    {p1_intro_icon:'پیش نیاز:',p2_intro_icon:'اشنایی  با کامپیوتر',icon_intro:<BsInfo className='icon-intro' />},
    {p1_intro_icon:'نوع مشاهده:',p2_intro_icon:'انلاین / دانلودی',icon_intro:<FiPlayCircle className='icon-intro' />}
  ])

  const [introtextpro,setintrotextpro]=useState([
    {titletintropro:'با آموزش پایتون  به آچار فرانسه تبدیل شو!',
      textintro1:'الان و امروز تو جامعه برنامه نویسی میبینیم که همه دارن درمورد پایتون صحبت می‌کنن و دلیل خوبی هم برای این کار دارن. پایتون با یه جامعه به‌طور تصاعدی در حال رشد، پیرامون علم داده، یادگیری ماشین، هوش مصنوعی، توسعه‌دهندگان وب و …، به زبانی تبدیل شده که دسترسی برنامه‌نویسان رو به جهان باز می‌کنه! دوره پایتون برای پیشرفت شما تولید و به صورت رایگان منتشر شده.',
      textintro2:'شایعاتی که شنیدید درسته! پایتون از نام گروه کمدی بریتانیایی برداشته شده. ون روسوم، به دنبال اسمی کوتاه، ساده و کمی مرموز بود و در حال خواندن اسکریپت‌های یک سیرک، اسم پایتون رو برای شاهکار خودش انتخاب کرد. جالبه بدونید توی قلمرو برنامه‌نویسی، زبان برنامه‌نویسی پایتون بر پایه خوندن، نوشتن و یادگیری آسون طراحی شده و از اون‌جایی کاملا منعطف هست',
    imgintrotext:'https://sabzlearn.ir/wp-content/uploads/2022/03/edfwef-1-1536x863.jpeg'},
    {titletintropro:'چرا پایتون زبان محبوبی است؟',
    textintro1:'زیرا پایتون زبانی با نحو ساده، ساختار شفاف، متن‌باز، رایگان، دارای کتابخانه‌های متعدد، همه‌منظوره و با پشتیبانی از پارادایم‌های برنامه‌نویسی گوناگون است. در این بخش از مطلب یادگیری پایتون چقدر زمان میبرد به دلایل محبوبیت این زبان برنامه‌نویسی پایتون پرداخته شده است. دلایل گوناگونی برای محبوبیت بالای پایتون و افزایش روزافزون این محبوبیت وجود دارد. ',
    textintro2:'برخی از این دلایل نشات گرفته از همان چهار هدف اصلی هستند که روسوم برای پایتون بیان کرده و حقیقتا تامین شده‌اند.شرکت‌های بزرگ و مهم فناوری در جهان مانند گوگل، فیس‌بوک، ناسا، یاهو، دراپ‌باکس، موزیلا، کورا، اینستاگرام، ردیت، آی‌بی‌ام و بسیاری از دیگر موارد، از هواداران پایتون محسوب می‌شوند که از این زبان در پروژه‌های نرم‌افزاری گوناگون خود استفاده می‌کنند.',
  imgintrotext:'https://files.virgool.io/upload/users/12142/posts/gltk4eh7oms7/ba8muy2k2cks.jpeg'},
  {titletintropro:'بازار کار پایتون و درآمد برنامه‌نویس پایتون در ایران و جهان',
  textintro1:'مسئله‌ای که برای بسیاری از افراد ضمن یادگیری یک مهارت مطرح می‌شود این است که بازار کار آن مهارت و درآمد کارشناسان آن چه میزان است. در زمینه یادگیری برنامه‌نویسی و زبان پایتون نیز این موضوع صدق می‌کند. در این بخش از مطلب یادگیری پایتون چقدر زمان میبرد به این موضوع پرداخته شده است.',
  textintro2:'بسیاری از افراد از ابتدا به این دلیل جذب دنیای برنامه‌نویسی می‌شوند که نه تنها در حال حاضر بازار کار خوبی دارد، بلکه از چشم‌انداز و آینده شغلی خوبی نیز بهره‌مند است و برنامه‌نویس‌ها معمولا از جایگاه و درآمد شغلی خوبی برخوردار هستند. پایتون نیز از این قاعده مستثنی نیست. پایتون یکی از زبان‌های برنامه‌نویسی است که فرصت‌های شغلی متعدد و متنوعی برای آن موجود است و برنامه‌نویسان این حوزه، درآمد و جایگاه شغلی خوبی دارند.',
imgintrotext:'https://files.virgool.io/upload/users/19654/posts/xqitwpl9ny7i/sxwfhivaxm7h.jpeg'},
{titletintropro:'برای شروع این دوره چه پیش نیاز هایی را باید بلد باشیم؟',
textintro1:'آشنایی با اصول و مبانی برنامه‌نویسی لازمه و پیش‌نیاز یادگیری هر زبان برنامه‌نویسی است. چه فرد قصد یادگیری پایتون را داشته باشد و چه بخواهد هر زبان دیگری را یاد بگیرد، باید اصول و مبانی برنامه‌نویسی را بداند. از جمله اصول و مبانی برنامه‌نویسی می‌توان به موارد زیر اشاره کرد:مفهوم نرم‌افزار,تاریخچه تکاملی زبان‌های برنامه‌نویسی,انواع زبان‌های برنامه‌نویسی,آشنایی با انواع دستورها و بخش‌های سازنده یک برنامه.',
textintro2:'در کل مهم نیست که اکنون شما کجا هستید و در چه وضعیتی . پایتون را بلدید یا نه . مهم این است که این نکات بالا را باید بدانید .برای یادگیری پایتون عجله کنید این زبانی است که همه جا کاربرد دارد و گسترده است اگر رفتید لینوکس به درد میخوره اگر ویندوزی بودید باز به درد میخوره اگر مک هستید بازم میتونید باهاش کار کنید اگر وب سایت یا فروشگاه آنلاین میخواهید بسازید پایتون کمکتون میکنه',
imgintrotext:'http://maktabkhooneh.org/mag/wp-content/uploads/2019/07/python-programming-language-3.jpg'},
  ])

  const [prouduct,setprouduct]=useState([
    {title:' دوره پروژه محور متخصص جنگو + پروژه',teacher:'رضا دولتی',price:'2,100,000',count:'33',img:'https://sabzlearn.ir/wp-content/uploads/2022/06/django-852x479-1-360x180.png',product_link:'/Django'},
    {title:'آموزش پایتون    پیشرفته + پروژه های جذاب',teacher:'رضا دولتی',price:'1,900,000',count:'145',img:'https://sabzlearn.ir/wp-content/uploads/2022/01/Py-852x479-1-360x180.png',product_link:'/Payton'},
    {title:'آموزش رایگان HTML  +  پروژه های جذاب ',teacher:' امیر دینی',price:'!رایگان',count:'1,975',img:'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg',product_link:'/Html'},
    {title:'آموزش رایگان  Css +  پروژه های جذاب',teacher:'امیر دینی',price:'100,000',count:'1,608',img:'https://yadify.com/wp-content/uploads/2018/10/what-is-css-th.jpg',product_link:'/Css'},
]
)

  return (
    <div>
<Introduction {...intropayton} />
<ht/>
<div id='intro-icons-div' className='first-div-icons-intro mx-lg-3'data-aos="fade-down">
  <Introicons {...introicon[0]}  />
  <Introicons {...introicon[1]} />
  <Introicons {...introicon[2]} />
  </div>

 
  <div id='intro-icons-div' className='mx-lg-3'data-aos="fade-up">
  <Introicons {...introicon[3]} />
  <Introicons {...introicon[4]} />
  <Introicons {...introicon[5]} />
  </div>
  <hr className='hr-icon-intro' />

  <Introtext {...introtextpro[0]} />

<Introtext {...introtextpro[1]} />

<Introtext {...introtextpro[2]} />

<Introtext {...introtextpro[3]} />



<div className="title-footer-backend">
<p>  سایر دوره های ما</p>
</div>
<div className="product-backend" data-aos="fade-up">
  <Introproduct {...prouduct[0]} />
  <Introproduct {...prouduct[1]} />
  <Introproduct {...prouduct[2]} />
</div>

    </div>
  )
}
