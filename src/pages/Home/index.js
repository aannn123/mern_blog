import React from 'react'
// import { useHistory, Link } from 'react-router-dom'
import { Button, Gap } from '../../components/atoms'
import { BlogItem } from '../../components/molecules'
import './home.scss'
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }  
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='create blog' onClick={handleClick} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className='pagination'>
          <Button title='Previous' />
          <Gap width={20} />
          <Button title='Next' />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home