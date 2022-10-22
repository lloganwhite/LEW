import React from 'react';
import { Link } from 'gatsby';
import "../components/index.css"
import { navigate } from "gatsby"

const index = () => {
  return (
    <header className='hero'>
      <div className='heroContainer'>
        <div className='heroInfo'>
        <h1>Logan E. White</h1>
        <p>Information Design 250</p>
        <button className='heroButton' onClick={()=>{navigate("/About")}}>How We Can Help</button>
        </div>
      </div>
    </header>
  );
}
export default index; 

