import React from 'react'
import {BallCanvas} from './canvas'
import { motion } from 'framer-motion'
import  { textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'
import { technologies} from '../constants'
import { styles } from '../styles'
const Tech = () => {
  return (
    <div>

   <div>
   <h2 className={`${styles.sectionHeadText} ${styles.paddingX}`} >Tech Experience</h2>
   <br/>
    </div>
    <div className={`${styles.paddingX} flex flex-row  flex-wrap justify-center
     gap-10`}>
        {technologies.map((technology) => (
          <div className='w-28 h-28 ' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}

     </div>
     </div>
  )
}

export default Tech