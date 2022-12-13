import React from 'react'
import { Link } from "gatsby"
import * as bottomStyles from "../components/bottomnav.module.css"

const topnav = () => {
    return (
        <div className={bottomStyles.navWrapper} >
            <div className={bottomStyles.mainNav}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/Help">Help</Link>
            </div>
        </div>
    )
}

export default bottomnav
