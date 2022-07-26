import React from 'react'
import './css.css'
import Accordion from 'react-bootstrap/Accordion';
import Introtext from '../../introproduct/Introtext'
import Introduction from '../../introproduct/Introduction'
import Introicons from '../../introproduct/Introicons'
import { useState } from 'react'
import {AiOutlineExperiment}from 'react-icons/ai'
import {AiOutlineFieldTime}from 'react-icons/ai'
import {AiOutlineCalendar}from 'react-icons/ai'
import {BiSupport}from 'react-icons/bi'
import {BsInfo}from 'react-icons/bs'
import {FiPlayCircle}from 'react-icons/fi'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();
export default function Css() {

  const[introCss,setintroCss]=useState(
    {img_intro:"https://roocket.ir/public/images/2019/9/29/css-2.png",
    title_intro:'آموزش CSS از مقدماتی تا پیشرفته + پروژه های کاربردی',
     p_intro1:'توی دوره مقدماتی تا پیشرفته Css یاد میگیری چطوری به المانای خشک و بی جون HTML زیبایی ببخشی. اینجا ما از رنگی کردن متن و دکمه ها میگیم تا پیاده سازی یه لندینگ پیج خفن و دلنشین با css. کاملا رایگان!',
     p_intro2:'تا اینجای کار با HTML آشنا شدی و میتونی اسکلت یه سایتو پیاده کنی دمت گرم. یه قدم بزرگ برداشتی.بهت تضمین میدم محتوای این دوره به حدی شیرینه که بعد از این دوره استایل اطرافیانتو به صورت کد css میبینی',
     p_intro3:'نکته: اگه HTML رو هنوز یاد نگرفتی برگرد کامل یادش بگیر چون لازمه css اینه که با html آشنا باشی.'  })

     const [introicon,setintroicon]=useState([
      {p1_intro_icon:'وضعیت دوره:',p2_intro_icon:'پیش فروش',icon_intro:<AiOutlineExperiment className='icon-intro' />},
      {p1_intro_icon:'مدت زمان دوره :',p2_intro_icon:'17 ساعت',icon_intro:<AiOutlineFieldTime className='icon-intro' />},
      {p1_intro_icon:'اخرین بروزرسانی:',p2_intro_icon:'1401/4/29',icon_intro:<AiOutlineCalendar className='icon-intro' />},
      {p1_intro_icon:'روش پشتیبانی:',p2_intro_icon:'انلاین',icon_intro:<BiSupport className='icon-intro' />},
      {p1_intro_icon:'پیش نیاز:',p2_intro_icon:'زبان پایه HTML ',icon_intro:<BsInfo className='icon-intro' />},
      {p1_intro_icon:'نوع مشاهده:',p2_intro_icon:'انلاین / دانلودی',icon_intro:<FiPlayCircle className='icon-intro' />}
    ])


    const [introtextpro,setintrotextpro]=useState([
      {titletintropro:'چه نکاتی در دوره آموزش جامع CSS می آموزیم؟',
        textintro1:'شما در دوره Css مقدماتی با خیلی از Property ها و نکات Css آشنا شدید و بعد از دوره Css مقدماتی می توانستید سایت های مختلفی طراحی کنید.اما در Css مطالب پیشرفته ای نیز وجود داره که برای تسلط در Css باید آن ها را بلد باشید.',
        textintro2:'مثلا شما بعد از دوره Css مقدماتی سبزلرن نمی توانستید به قسمت های مختلف سایت انیمیشن اعمال کنید یا …در این دوره موارد پیشرفته Css به صورت پروژه محور به شما آموزش داده می شود و در انتهای دوره چندین مینی پروژه نیز انجام شده تا شما مطالب لازم را به طول کامل و عمیق یاد بگیرید و به راحتی بتوانید سایت های مختلفی طراحی کنید. ​',
      imgintrotext:'https://sabzlearn.ir/wp-content/uploads/2021/02/how-to-link-a-stylesheet-css-file-to-your-html-file.jpg'},
      {titletintropro:'برای شروع این دوره چه پیش نیاز هایی را باید بلد باشیم؟',
      textintro1:'برای ساخت یک وب سایت قبل از هر چیزی از زبان Html برای ساخت ساختمان کلی و اسکلت بندی آن استفاده میشه و بعد از پیاده سازی این مورد، نوبت به Css میرسه که سایت رو باهاش خوشگل بکنیم و به اسکلت ساخته شده استایل و رنگ و لعاب مورد نظرمون رو اعمال بکنیم.',
      textintro2:'پس برای شروع یادگیری زبان Css کافیه که زبان Html رو به خوبی بلد باشین و به جز Html هیچ پیش نیاز دیگه ای نیاز نیست.',
    imgintrotext:'https://blog.logrocket.com/wp-content/uploads/2022/03/deep-dive-css-where-function-nocdn.png'},
    {titletintropro:'آیا یادگیری Css سخت است؟',
    textintro1:'یادگیری مفاهیم و مطالب زبان Css کار پیچیده و دشواری نیست و می توانید آن ها را به خوبی یاد بگیرین. اما فقط دونستن این مطالب کفایت نمیکنه. بلکه باید بتونین از Css در پروژه های واقعی استفاده کنین و باهاش طرح های خوشگل و جذاب پیاده سازی کنین.',
    textintro2:'این موضوع نیازمند تمرین و تکرار هست و یه کوچولو زمان میگیره ازتون که باید حوصله به خرج بدین و دست از تمرین و تکرار برندارین و همچنین باید کمی خلاقیت هم داشته باشین.',
  imgintrotext:'https://www.hamyarit.com/wp-content/uploads/2020/04/css-art.png-hamyarit.com-css-art.png'},
  {titletintropro:'آیا دوره آموزش Css پروژه محور است؟',
  textintro1:'جواب این سوال مثبت است.حوزه برنامه نویسی به شکلی است که اگر فقط خود مطالب رو یاد بگیرین درحالی که هیچ پروژه‌ای با آن ها پیاده سازی نکنین، به هیچ وجه نمیتونین اونطور که باید به سطح تسلط برسین.',
  textintro2:'به همین دلیل در دوره آموزش Css چندین پروژه جذاب و خفن براتون پیاده سازی کردیم تا بتونین با مشاهده آن ها و تمرین و تکرار به سطح خیلی خوبی در Css برسید و این زبان قدرتمند رو به خوبی یاد بگیرین.',
  imgintrotext:'https://hanet.ir/wp-content/uploads/2017/05/use-CSS-773x350.png'},
    ])


  return (
    <div>
      <Introduction {...introCss}  />


      <hr />
<div id='intro-icons-div' className='first-div-icons-intro' data-aos="fade-down">
  <Introicons {...introicon[0]} />
  <Introicons {...introicon[1]} />
  <Introicons {...introicon[2]} />
  </div>

 
  <div id='intro-icons-div' className='mx-lg-3' data-aos="fade-up">
  <Introicons {...introicon[3]} />
  <Introicons {...introicon[4]} />
  <Introicons {...introicon[5]} />
  </div>


<hr className='hr-icon-intro' />


<Introtext {...introtextpro[0]} />

<Introtext {...introtextpro[1]} />

<Introtext {...introtextpro[2]} />

<Introtext {...introtextpro[3]} />

<div className="container" data-aos="fade-up">
  <Accordion className='acoordion' dir='rtl' defaultActiveKey="0">
      <Accordion.Item className='accord-item' eventKey="0">
        <Accordion.Header className='accordion-hed bg-dark'><span>بعد از این دوره گام بعدی چیست؟</span></Accordion.Header>
        <Accordion.Body>
        <p className='acoordian-text'>شما با Css می توانید عناصر وب سایت را استایل دهی کنید اما نمی توانید به عمل های کاربر واکنش های مناسب و دلخواه انجام بدید.
برای این کار باید از جاوا اسکریپت استفاده کنید.
بعد از یادگیری Css نوبت به آموزش جاوا اسکریپت می رسد که باید یاد بگیرید.</p>
        </Accordion.Body>
      </Accordion.Item>
    
      <Accordion.Item dir='rtl'  className='accord-item' eventKey="1">
      <Accordion.Header className='accordion-hed'><span>بعد از دوره آموزش جامع CSS می توانم وارد بازار کار شده و کسب درآمد بکنم؟</span></Accordion.Header>
      <Accordion.Body>
        <p className='acoordian-text'>جواب مثبت / منفی است.

شما می توانید وب سایت های خیلی شیک و زیبایی با خود Html و Css طراحی کنید و کسب درآمد کنید. اما ممکن است پروژه ای باشد که نیاز به  جاوا اسکریپت داشته باشد.
برای همین موضوع برای مطمئن تر شدن از کسب درآمد، جاوا اسکریپت را یاد بگیرید و سپس با قدرت بیشتر وارد بازار کار بشید.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item dir='rtl'  className='accord-item' eventKey="2">
      <Accordion.Header className='accordion-hed'><span>آیا جایگزینی برای Css وجود دارد؟</span></Accordion.Header>
      <Accordion.Body>
        <p className='acoordian-text'>جواب منفی است.
هیچ جایگزینی برای Css وجود ندارد و شما برای استایل دهی به عناصر وب سایت خودتون حتما باید Css را یاد بگیرید.
یعنی شما نمی توانید بگویید “بجای Css زبان X را یاد میگیرم”.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

</div>

    </div>
  )
}
