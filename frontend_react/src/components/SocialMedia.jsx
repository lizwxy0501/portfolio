import React from 'react'
import { FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        {/* <div><BiLogoGithub/></div>
        <div><BiLogoLinkedinSquare/></div> */}
        <div><FaLinkedin/></div>
        <div><FaGithub/></div>
        <div><FaPortrait/></div>
    </div>
  )
}

export default SocialMedia