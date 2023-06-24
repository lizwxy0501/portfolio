import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import { images } from '../../assets'


const abouts = [
  {title: "Web Design", description: "Figma   UML",imageUrl: images.about01},
  {title: "Frontend Frameworks", description: "React   Angular   Vue",imageUrl: images.about02},
  {title: "Programing Languages", description: "Java   Python   Javescript",imageUrl: images.about03},
  {title: "Database", description: "MySQL   MongoDB   PostgreSQL",imageUrl: images.about04},
]

const About = () => {

  return (
    <>
      <h2 className='head-text'>
        I know That <span>Practice </span> <br /> Makes <span>Perfect</span>
        </h2> 

        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div 
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{ duration: 0.5, type:'tween'}}
              className='app__profile-item'
              key={about.title + index}
              >
                <img src={about.imageUrl} alt={about.title}></img>
                <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

            </motion.div>
          )
          )}
          
          </div>   
    </>

  )
}

export default About