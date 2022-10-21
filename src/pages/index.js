import React from 'react';
import { Link } from 'gatsby';
import "../components/index.css"


const index = () => {
  return (
    <header className='hero'>
      <div className='heroContainer'>
        <div className='heroInfo'>
          <h1>Logan E. White</h1>
          <p>Information Design</p>
          <Link to="/About">See how we can help.</Link>
        </div>
      </div>
    </header>
  )
}
export default index;
