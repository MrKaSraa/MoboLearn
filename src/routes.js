

import Html from './Front-end/Html/Html'
import Main from './Main/Main'
import Css from './Front-end/Css/Css'
import Payton from'./Back-end/Payton'
import Django from './Back-end/Django'
import Javaarticle from './maghale/Javaarticle'
import Login from './Login/Login'
import Uiuxaricle from './maghale/Uiuxaricle'
import Createaccont from './Login/Createaccont'
import Emailbox from './Emailbox/Emailbox'
const routes =[
   {
    path:'/',element:<Main/>
   },
    {
        path:'/Html',element:<Html/>
    },
    {
        path:'/Css',element:<Css/>
    },
    {
        path:'/Payton',element:<Payton/>
    },  {
        path:'/Django',element:<Django/>
    },
    {
        path:'/javaarticle',element:<Javaarticle/>
    },
    {
        path:'/Uiuxaricle',element:<Uiuxaricle/>
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
  
   
  
]


export default routes