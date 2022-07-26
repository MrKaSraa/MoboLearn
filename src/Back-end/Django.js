import React from 'react'
import './django.css'
import Introproduct from '../Main/product/Product'
import Introduction from '../introproduct/Introduction'
import Introicons from'../introproduct/Introicons'
import Introtext from '../introproduct/Introtext'
import { useState } from 'react'
import {AiOutlineExperiment}from 'react-icons/ai'
import {AiOutlineFieldTime}from 'react-icons/ai'
import {AiOutlineCalendar}from 'react-icons/ai'
import {BiSupport}from 'react-icons/bi'
import {BsInfo}from 'react-icons/bs'
import {FiPlayCircle}from 'react-icons/fi'
export default function Django() {

  const[intropayton,setintroHtml]=useState(
    {img_intro:'https://sabzlearn.ir/wp-content/uploads/2022/06/dfvsdcsdcdscsd.png',
    title_intro:'دوره پروژه محور متخصص جنگو',
     p_intro1:'از ویژگی های مهم این دوره میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و توجه به جزئیات، بررسی روش های مختلف حل مسئله و انتخاب بهترین روش ممکن، رعایت اصول کدنویسی، توجه به داکیومنت خوانی، بررسی خطاهای احتمالی و پشتیبانی اختصاصی اشاره کرد. ',
     p_intro2:'جنگو یک فریمورک وب مبتنی بر پایتون  و زبان سطح بالا میباشد که امکان طراحی سایت فروشگاهی و توسعه سریع وب سایت‌های ایمن را فراهم می‌کند. جنگو توسط توسعه دهندگان باتجربه ساخته شده و از بسیاری از مشکلات هنگام تولید وب سایت پیشگیری می‌کند',
     p_intro3:'بنابراین می‌توانید بدون نیاز به هیچ نگرانی خاصی، تنها روی نوشتن برنامه خود و یا ساخت و طراحی سایت شرکتی خود تمرکز کنید.'  
    }
  )

   const [introicon,setintroicon]=useState([
    {p1_intro_icon:'وضعیت دوره:',p2_intro_icon:'پیش فروش',icon_intro:<AiOutlineExperiment className='icon-intro ' />},
    {p1_intro_icon:'مدت زمان دوره :',p2_intro_icon:' ۱۰۰  ساعت',icon_intro:<AiOutlineFieldTime className='icon-intro' />},
    {p1_intro_icon:'اخرین بروزرسانی:',p2_intro_icon:'1401/4/29',icon_intro:<AiOutlineCalendar className='icon-intro' />},
    {p1_intro_icon:'روش پشتیبانی:',p2_intro_icon:' تلفنی + انلاین',icon_intro:<BiSupport className='icon-intro' />},
    {p1_intro_icon:'پیش نیاز:',p2_intro_icon:'تسلط بر زبان پایتون',icon_intro:<BsInfo className='icon-intro' />},
    {p1_intro_icon:'نوع مشاهده:',p2_intro_icon:'انلاین / دانلودی',icon_intro:<FiPlayCircle className='icon-intro' />}
  ])

  const [introtextpro,setintrotextpro]=useState([
    {titletintropro:'جنگو چگونه کار می‌کند؟  ',
      textintro1:'وقتی درخواستی به یک سرور وب می‌رسد، ابتدا این درخواست به جنگو منتقل می‌شود و جنگو سعی می‌کند بفهمد چه چیزی مورد درخواست واقع شده است. همچنین جنگو آدرس صفحه وب را می‌گیرد و سعی می‌کند بفهمد چه کاری باید انجام دهد. این قسمت توسط url resolver Django انجام می‌شود (توجه داشته باشید که آدرس وب سایت URL نامیده می‌شود که مخفف Uniform Resource Locator می‌باشد.) سپس جنگو لیستی از الگوها را می‌گیرد و سعی می‌کند URL را با آنها تطبیق دهد. جنگو الگوها را از بالا به پایین بررسی می‌کند و اگر درخواست با الگوی خاصی مطابقت داشته باشد، جنگو درخواست را به عملکرد مرتبط منتقل می‌کند (که به آن View می‌گویند).',
      textintro2:'یک حامل نامه را با یک نامه تصور کنید. او در خیابان قدم می‌زند و هر شماره خانه را با شماره موجود در نامه چک می‌کند. اگر مطابقت داشته باشد، نامه را آنجا می‌گذارد. urlresolver نیز همین گونه کار می‌کند!',
    imgintrotext:'https://sarobartech.com/media/blog/python--django.png'},
    {titletintropro:'برخی مزایای فریم‌ورک جنگو',
    textintro1:'جنگو تقریباً امکان همه کارهایی را که ممکن است توسعه دهندگان بخواهند انجام دهند را فراهم می‌کند. از آنجا که هر آنچه شما نیاز دارید بخشی از یک “محصول” است، همه اینها به طور یکپارچه با هم کار می‌کنند و از اصول طراحی سازگار با هم پیروی می‌کنند و مستندات گسترده و به روز دارند. از جنگو می‌توان تقریباً برای ساختن هر نوع وب سایتی (از سیستم‌های مدیریت محتوا، طراحی پورتال و ویکی‌ها گرفته تا شبکه‌های اجتماعی و سایت‌های خبری و طراحی سایت ریسپانسیو) استفاده کرد. این برنامه می‌تواند با هر فریمورک سمت مشتری دیگری نظیر فریم ورک های php نیز کار کند و می‌تواند تقریباً در هر قالب (از جمله HTML، RSS، JSON، XML، PHP و غیره) محتوایی را ارائه دهد. جهت اطلاع از اینکه php چیست کلیک نمایید. ',
    textintro2:'جنگو با ارائه یک فریمورک قدرتمند جهت محافظت خودکار از وب سایت طراحی شده است و به توسعه دهندگان کمک می‌کند تا از بسیاری از اشتباهات معمول امنیتی جلوگیری کنند. به عنوان مثال، جنگو یک روش ایمن برای مدیریت حساب‌های کاربری و رمزهای عبور کاربر، اجتناب از اشتباهات رایج مانند قرار دادن اطلاعات جلسه (Sessions) در کوکی‌ها و در جاهایی که آسیب پذیر میباشد یا ذخیره مستقیم رمزهای عبور به جای هش نمودن آنها و… فراهم می‌کند..',
  imgintrotext:'https://files.virgool.io/upload/users/107925/posts/ti2ard68im5o/wcw9ety9msp7.png'},
  {titletintropro:'پیش نیازهای لازم برای یادگیری جنگو چیست؟  ',
  textintro1:'برای استفاده از فریم ورک جنگو به آشنایی با زبان پایتون و توابع آن نیاز دارید. همچنین آشنایی با مواردی مانند ساختار ذخیره داده‌ها در پایتون مانند Tuple، List و غیره ,مفاهیم برنامه نویسی شی گرا ,JSON و REST APIs, مدیریت پایگاه داده و دستورات SQL.',
  textintro2:'برای یادگیری جنگو ضروری است. پایتون در حوزه‌های مختلف تکنولوژی کاربردهای فراوانی دارد و یادگیری فریم ورک قدرتمندی مانند جنگو، می‌تواند موقعیت‌های شغلی فراوانی برای شما فراهم کند.',
imgintrotext:'https://res.cloudinary.com/practicaldev/image/fetch/s--iEmy2OHM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4bv6tjo2s9zq7oycou2x.jpeg'},
{titletintropro:'جمع بندی',
textintro1:'در این مطلب بررسی کردیم که جنگو چیست و چه ویزگی هایی دارد. اگر قصد ورود به دنیای طراحی وب و اپلیکیشن را دارید، جنگو می‌تواند گزینه مناسبی برای یادگیری باشد. یادگیری پایتون می‌تواند قدرت استفاده از جنگو را در اختیار شما گذاشته و بازار کار جدیدی برایتان فراهم کند. جنگو به سرعت کارها را پیش می‌برد و شما را قانع می‌کند که چرا به جای آن، سراغ یادگیری فریم ورک دیگری نرفته اید. ما آماده است به شما در یادگیری پایتون و فریم ورک‌های آن کمک کند و همراه شما در این مسیر هیجان انگیز باشد. ',
textintro2:' ',
imgintrotext:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/936807/retina_1708x683_cover-Redesign-DjangoMistakes-Luke_Newsletter-583fce40c721c48192c477deff31dc42-68f8b5b282f890fd6c1888a8e381f130.png'},
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

<hr/>
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
