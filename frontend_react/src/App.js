import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Narbar } from './components'

const App = () => {
  return (
    <div className='app'>
        <Narbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App