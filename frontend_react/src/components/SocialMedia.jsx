import React from 'react'
import { FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        {/* <div><BiLogoGithub/></div>
        <div><BiLogoLinkedinSquare/></div> */}
        <div
        >
        <a href= 'https://www.linkedin.com/in/liz-wu-gmail/' target="_blank" rel="noreferrer"><FaLinkedin/></a>
        </div>
        <div>
        <a href= 'https://github.com/lizwxy0501' target="_blank" rel="noreferrer">
        <FaGithub/>
        </a>
          </div>
        <div>
        <a href= 'https://liz-dev.netlify.app/' target="_blank" rel="noreferrer"><FaPortrait/></a>
          </div>
    </div>
  )
}

export default SocialMedia