import React from 'react'
import './html.css'
import Introtext from '../../introproduct/Introtext'
import Introicons from'../../introproduct/Introicons'
import Introduction from '../../introproduct/Introduction'
import {AiOutlineExperiment}from 'react-icons/ai'
import {AiOutlineFieldTime}from 'react-icons/ai'
import {AiOutlineCalendar}from 'react-icons/ai'
import {BiSupport}from 'react-icons/bi'
import {BsInfo}from 'react-icons/bs'
import {FiPlayCircle}from 'react-icons/fi'
import Accordion from 'react-bootstrap/Accordion';

import { useState } from 'react'
export default function Html() {
  const[introHtml,setintroHtml]=useState(
    {img_intro:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Vo0RpAHgbf77ui54oQTEy3bCoS3fEW0w_A&usqp=CAU",
    title_intro:'آموزش HTML مقدماتی تا پیشرفته + پروژه های کاربردی',
     p_intro1:'اولین قدم شروع طراحی وبسایت، آموزش HTML هست. HTML یه زبان نشانه گذاری هست که با کمک اون میتونی تگ هایی بنویسی تا سایت رو روی اون تگ ها پیاده کنی.',
     p_intro2:'همونجوری که هیچ موجودی نمیتونه بدون اسکلت زندگی کنه، هیچ وبسایتی هم نمیتونه بدون HTML لود بشه. با یادگیری HTML خیلی راحت و قشنگ میتونی یه اسکلت سفت و سخت برای وبسایتت درست کنی.',
     p_intro3:'نگران یادگیریشم نباش. ما تو این سایت به صورت کاملا رایگان یه دوره مقدماتی تا پیشرفته HTML تدارک دیدیم، تا بدون دغدغه مسیر طراحی سایت رو شروع کنی.این آموزش به صورت کاملا عملی و پروژه محور هست، طوری که بعد از چند جلسه به راحتی میتونی یه فرم ثبت نام با کمک HTML طراحی کنی.'  
    }
  )

  const [introicon,setintroicon]=useState([
    {p1_intro_icon:'وضعیت دوره:',p2_intro_icon:'پیش فروش',icon_intro:<AiOutlineExperiment className='icon-intro ' />},
    {p1_intro_icon:'مدت زمان دوره :',p2_intro_icon:'11:22 ساعت',icon_intro:<AiOutlineFieldTime className='icon-intro' />},
    {p1_intro_icon:'اخرین بروزرسانی:',p2_intro_icon:'1401/4/29',icon_intro:<AiOutlineCalendar className='icon-intro' />},
    {p1_intro_icon:'روش پشتیبانی:',p2_intro_icon:'انلاین',icon_intro:<BiSupport className='icon-intro' />},
    {p1_intro_icon:'پیش نیاز:',p2_intro_icon:'اشنایی با کامپیوتر',icon_intro:<BsInfo className='icon-intro' />},
    {p1_intro_icon:'نوع مشاهده:',p2_intro_icon:'انلاین / دانلودی',icon_intro:<FiPlayCircle className='icon-intro' />}
  ])

  const [introtextpro,setintrotextpro]=useState([
    {titletintropro:'چه نکاتی در این دوره می آموزیم؟',
      textintro1:'شما در دوره Html مقدماتی با خیلی از تگ ها و نکات Htmlمثل تگ های مربوط به متون، چیدمان عناصر و … آشنا شدید و بعد از دوره Html مقدماتی می توانستید سایت های مختلفی را در حد اسکلت بندی طراحی کنید. مثلا شما بعد از دوره Html مقدماتی سبزلرن نمی توانستید عناصری مثل موزیک، ویدئو و … را در سایت درج کنید.',
      textintro2:'در این دوره موارد پیشرفته Html به شما آموزش داده می شود و چندین مینی پروژه نیز در دوره انجام شده تا شما مطالب لازم را به طول کامل و عمیق یاد بگیرید و به راحتی بتوانید هر عنصری که خواستید در سایت های خودتون درج کنید.',
    imgintrotext:'https://sabzlearn.ir/wp-content/uploads/2020/06/222-1024x536.png'},
    {titletintropro:'در چه مدت زمانی می توان Html را یاد گرفت؟',
    textintro1:'مدت زمان یادگیری Html برای هر شخص متفاوت بوده و به پارامتر های مختلفی بستگی دارد. پارامتر هایی مثل سطح علاقه شخص، سطح چالش پذیر بودن، سطح تسلط در زبان انگلیسی، تسلط شخص در سرچ کردن و … و نمی توان یک مدت زمان ثابتی را برای هر شخص در نظر گرفت. ممکن است شخصی در یک ماه بتواند Html را یاد بگیرد اما شخصی دیگر در 2 ماه هم نتواند به سطح لازم برسد.',
    textintro2:'پس مدت زمان یادگیری یک مقوله ای است که به خود شما بستگی دارد اما اگر بخواهیم یک مدت زمان میانگین در نظر بگیریم، می توان Html را در 1 ماه یاد گرفت.',
  imgintrotext:'https://sabzlearn.ir/wp-content/uploads/2020/06/333.jpg'},
  {titletintropro:'بازار کار طراحی وب در چه وضعیتی قرار دارد؟',
  textintro1:'همان طور که می دانید امروزه تقریبا تمام کسب و کار ها به سمت آنلاین شدن حرکت کرده اند و هر کسب و کار آنلاین و اینترنتی قطعا به یک وب سایت نیاز دارد. برای بررسی بازار کار و میزان درآمد برنامه نویسی وب بهتر است به منابعی مراجعه کنیم که در زمینه بازار کار و استخدام فعالیت می کنند؛ مثل جابینجا، جاب ویژن، آی استخدام و … .',
  textintro2:'به عنوان مثال آگهی های زیر از وب سایت جابینجا می باشند:',
imgintrotext:'https://sabzlearn.ir/wp-content/uploads/2020/06/0.png'},
{titletintropro:'برای شروع این دوره چه پیش نیاز هایی را باید بلد باشیم؟',
textintro1:'زبان Html اولین قدم برای ورود به حوزه توسعه وب می باشد که تقریبا هیچ پیش نیازی ندارد. همین که شما به این حوزه علاقمند باشید و یک سیستم (کامپیوتر و لپتاپ) داشته باشید می توانید دوره آموزش Html را شروع کرده و یاد بگیرید. اما مورد بعدی این است که هر حوزه شغلی اصطلاحات و مفاهیم خاص خودش را دارد که توسط فعالان آن حوزه مورد استفاده قرار می گیرد. اگر شما قبل از ورود به یک حوزه شغلی با اصطلاحات و مفاهیم تخصصی آن آشنایی داشته باشید، می توانید مسیر یادگیری بهتر، هموار تر و سریع تری را داشته باشید.',
textintro2:'به عنوان مثال حوزه آشپزی ادویه ها و ظروفی وجود دارد که قطعا افراد عادی با آن ها آشنایی ندارند. و حتی اسامی آن ها را نمی دانند. حوزه برنامه نویسی وب نیز اصطلاحات و مفاهیم خاصی مثل هاست، دامنه، فرانت اند، بک اند، سرور، دیتاسنتر، دپلود کردن و … وجود دارد که اگر قبل از یادگیری Html آن ها را یاد بگیرید، می توانید یادگیری Html را خیلی سریع تر و بهتر پیش ببرید.',
imgintrotext:'https://sabzlearn.ir/wp-content/uploads/2020/06/444.jpg'},
  ])

  return (
    <div>
<Introduction {...introHtml} />
<hr />
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


<div className="html-title">
  <p>سوالات متداول</p>
</div>

<div className="container"   data-aos="fade-up">
  
<Accordion className='acoordion' dir='rtl' defaultActiveKey="0" >
      <Accordion.Item className='accord-item' eventKey="0">
        <Accordion.Header className='accordion-hed bg-dark'><span>بعد از این دوره گام بعدی چیست؟</span></Accordion.Header>
        <Accordion.Body>
        <p className='acoordian-text'>شما با Html صرفا می توانید عناصر دلخواهتان را با ظاهر پیشفرض در وب سایت درج کنید اما نمی توانید به عناصر موجود در وب سایت استایل و ظاهر دلخواه خودتان را نسبت بدید.

برای این کار (استایل دهی به عناصر وب سایت) باید از Css استفاده کنید.
بعد از یادگیری Html نوبت به Css می رسد که باید یاد بگیرید.</p>
        </Accordion.Body>
      </Accordion.Item>
    
      <Accordion.Item dir='rtl'  className='accord-item' eventKey="1">
      <Accordion.Header className='accordion-hed'><span>آیا جایگزینی برای Html وجود دارد؟</span></Accordion.Header>
      <Accordion.Body>
        <p className='acoordian-text'>جواب منفی است.
هیچ جایگزینی برای Html وجود ندارد و شما برای ورود به حوزه طراحی وب حتما باید Html را یاد بگیرید.
یعنی شما نمی توانید بگویید “بجای Html زبان X را یاد میگیرم”.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item dir='rtl'  className='accord-item' eventKey="2">
      <Accordion.Header className='accordion-hed'><span>بعد از این دوره می توانم وارد بازار کار شده و کسب درآمد بکنم؟</span></Accordion.Header>
      <Accordion.Body>
        <p className='acoordian-text'>جواب قطعا منفی است.
شما نمی توانید وب سایت های خیلی شیک و زیبایی با خود Html طراحی کنید، همان طور که می دانید با Html می توانید فقط عناصر سایت را با استایل و ظاهر پیشفرض در سایت درج کنید.
خیلی واضح است که اگر سایتی استایل و ظاهر مناسبی نداشته باشد مورد پسند کسی قرار نمی گیرد. پس شما نمی توانید فقط با Html وارد بازار کار شده و کسب درآمد کنید.
برای ورود به بازار کار در حوزه وب، بعد از Html حداقل باید Css را نیز یاد بگیرید.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

</div>

    </div>
  )
}


