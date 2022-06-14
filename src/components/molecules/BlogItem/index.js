import React from 'react'
import { LoginBG } from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
    return (
        <div className='blog-item'>
            <img  className='image-thumb' src={LoginBG} alt="post" />
            <div className='content-detail'>
                <p className='title'>Title Blog</p>
                <p className='author'>Farhan - 2 Januari 2022</p>
                <p className='body'>How to Downgrade react-router-dom? — To downgrade react-router-dom into v5.20 then use npm install react-router-dom@5.2.0, your React version ...</p>
            </div>
        </div>
    )
}

export default BlogItem