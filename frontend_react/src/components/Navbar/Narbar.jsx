import React from 'react'
import './Narbar.scss'
import { images } from '../../assets'

const Narbar = () => {
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo'></img>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div>
                    </div>
                        <a href={`#{item}`}>
                            {item}
                        </a>
                </li>

            )

            )}
        </ul>
    </nav>
  )
}

export default Narbar