import React from 'react'
import './article.css'
import { Link } from 'react-router-dom'
export default function Article(props) {
  return (
    <div className='article'>
      <div>
        <img className='img-article' src={props.img_article} alt="" />
      </div>

<p className='p-article'>{props.title_article}</p>
<p dir='rtl' className='p-2-article'>{props.info_article}</p>

<Link to={props.link_article} className='btn btn-dark btn-block w-100' >بیشتر بخوانید</Link>

    </div>
  )
}
