import React from 'react'
import { Link } from "gatsby"
import * as topStyles from "./components/topnav.module.css"

const topnav = () => {
    return (
        <div className={topStyles.navWrapper} >
            <div className={topStyles.mainNav}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/Help">Help</Link>
            </div>
        </div>
    )
}

export default topnav