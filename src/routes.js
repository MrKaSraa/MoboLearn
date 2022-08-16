

import Account from './Nullpage/Account'
import Main from './Main/Main'
import Articlepage from './ArticlePage/Articlepage'
import Cart from './Nullpage/Cart'
import Login from './Login/Login'
import Order from './Nullpage/Order'
import Createaccont from './Login/Createaccont'
import Emailbox from './Emailbox/Emailbox'
import Productpage from './Productpage/Productpage'
const routes =[
   {
    path:'/',element:<Main/>
   },
    
    {
        path:'/Login',element:<Login/>
    },
    {
        path:'/Createaccont',element:<Createaccont/>
    },
    {
        path:'/Emailbox',element:< Emailbox/>
    },
  
    {
        path:'/product:productid' ,element:<Productpage/>
     }, 
     {
        path:'/article/:articleid' ,element:<Articlepage/>
     }, 
     {
        path:'/Account' ,element:<Account/>
     }, 
     {
        path:'/Cart' ,element:<Cart/>
     }, 
     {
        path:'/Order' ,element:<Order/>
     }, 
]


export default routes