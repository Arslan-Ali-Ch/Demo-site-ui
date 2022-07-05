import React from 'react'
import './intro.css'
import github from '../../images/github.png'
import boy from '../../images/boy.png'
import cool from '../../images/cool.png'
import facebook from '../../images/facebook.png'
import happy from '../../images/happy.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'
import { motion } from 'framer-motion'


const Intro = () => {
 
  return (
    <div className='intro'
  >
    
    <div className='ileft'>
      <div className='itext'>
        <span>Hello I AM</span>
        <span>ABCXYZ</span>
        <span>Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Illo, optio.
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sunt, labore.
        </span>
      </div>
      <button className='button ibutton'>hire me</button>
      <div className='licon'>
        <img src={whatsapp} alt=""/>
        <img src={twitter} alt=""/>
        <img src={github} alt=""/>
      </div>
    </div>
    <div className='iright'>
      <img src={boy} alt=""/>
      <motion.div 
      initial={{translateX:'50px'}}
      whileInView={{translateX:'-100px'}}
      transition={{duration: 3, type:'spring'}}
       className='dev'>
        <img src={happy} alt=""/>
        <span>i am a developer</span>
      </motion.div>
      <motion.div 
      initial={{translateX:'50px'}}
      whileInView={{translateX:'-400px'}}
      transition={{duration: 3, type:'spring'}}
      
      className='dev2'>
        <img src={cool} alt=""/>
        <span>i am a developer</span>
      </motion.div>
      <motion.div
      initial={{translateX:'-50px'}}
      whileInView={{translateX:'100px'}}
      transition={{duration: 3, type:'spring'}}
      
      className='dev3'>
        <img src={cool} alt=""/>
      </motion.div>
    </div>
  </div>
  
  )
}
export default Intro
