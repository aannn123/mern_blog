import React from 'react'
import { RegisterBG } from '../../assets'
import './detailBlog.scss'

const DetailBlog = () => {
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={RegisterBG} alt="thumb" />
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Title Blog</p>
      <p className='blog-body'>Title Blog</p>
    </div>
  )
}

export default DetailBlog