import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import { images } from '../../assets'
import { urlFor, client } from '../../client'

// const abouts = [
//   {title: "Web Design", description: "Figma UML",imageUrl: images.about01},
//   {title: "Frontend Frameworks", description: "React Angular Vue",imageUrl: images.about02},
//   {title: "Programming Languages", description: "Java Python Javascript",imageUrl: images.about03},
//   {title: "Database", description: "MySQL MongoDB PostgreSQL",imageUrl: images.about04},
// ]

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
  const query = '*[_type == "abouts"]';  
  
  client.fetch(query).then((data) => {
    // console.log(data)
    setAbouts(data);
  });

  }, []);
  
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
                <img src={urlFor(about.imgUrl)} alt={about.title}></img>
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