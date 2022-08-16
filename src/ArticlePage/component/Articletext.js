import React from 'react'
import './articletext.css'
import { useParams } from 'react-router-dom'
import textdata from '../articlepagedata/articletextdata'
export default function () {
  let params= useParams()
    let mainarticledata = textdata.find(text => text.id == params.articleid)
  return (
    <div data-aos="fade-up">
{mainarticledata.items.map(item =>(
        <>
           <div className="title-maghale-text">
            <p>{item.title_article_text}</p>
        </div>
<hr />
<div className="container" >
          <div className="p-maghale-text"  data-aos="fade-up">
<p>{item.p_article_text}</p>
        </div>
</div>
</>
))}
     
 

    </div>
  )
}
