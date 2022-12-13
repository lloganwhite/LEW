import React from 'React'

import * as heroStyles from "./hero.module.css"
import { navigate } from "gatsby"

const Header = () => {
    return (
    <header className={heroStyles.hero} >
        <div>

        </div>
        <div className={heroStyles.heroContainer}>
        <div className={heroStyles.heroInfo}>
        <h1>Logan E. White</h1>
        <p>Information Design 250</p>
        <button className='heroButton' onClick={()=>{navigate("/About")}}>How We Can Help</button>
        </div>
        </div>

    </header>

    )

}

export default Header
