import './Footer.scss'
import React, { useState } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import { images } from '../../assets'

const Footer = () => {

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    message:''
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]:value });
  }

  const handleSumbit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message:formData.message,
    };

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  }


  return (
    <>
      <h2 className='head_text'>
        Contact with Me
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email'>
          </img>
            <a href='lizwxy0501@gmail.com' className='p-text'>lizwxy0501@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile'>
          </img>
            <a href='tel' className='p-text'>+ 353 (87) 356 9920</a>
        </div>
      </div>

      {! isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='username' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>

        <div>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          value={message}
          name='message'
          onChange={handleChangeInput}
          />
        </div>
        <button type='button' disabled={message.length === 0} className='p-text' onClick={handleSumbit}>
          {loading ? 'Sending' : 'Send Message'}
        </button>

        

      </div>
      : <div>
        <h3 className='head-text'>Thanks for getting in touch!</h3>
      </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg')