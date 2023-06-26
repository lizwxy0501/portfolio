import React from 'react'
import { About, Footer, Header, Skills, Work } from './container'
import { Narbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Narbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        {/* <Testimonial/> */}
        <Footer/>
    </div>
  )
}

export default App