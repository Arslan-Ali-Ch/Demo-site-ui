import React from 'react'
import './service.css';
import github from '../../images/github.png'
import boy from '../../images/boy.png'
import cool from '../../images/cool.png'
import facebook from '../../images/facebook.png'
import happy from '../../images/happy.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'
import {motion} from 'framer-motion';
const Service = () => {
  return (
    <div className='service'>
    <div className='lservice'>
      <span>MY AWSOME</span>
      <span>SERVICES</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus ab cum fugiat at ipsa consequatur dicta magnam id sunt magni?</span>
      <button className='button sbutton'>download cv</button>
    </div>
    <div className='rservice'>
      <motion.div className='design'
      initial={{translateX:'-50px'}}
      whileInView={{translateX:'10px'}}
      transition={{duration: 3, type:'spring'}}
      >
        <img src={cool} alt=""/>
        <span>Design</span>
        <span>Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Laudantium, ducimus.</span>
        <button className='rbutton'>LearnMore</button>
      </motion.div>
      <motion.div className='developer'
      initial={{translateX:'150px'}}
      whileInView={{translateX:'-60px'}}
      transition={{duration: 3, type:'spring'}}
      >
        <img src={cool} alt=""/>
        <span>Developer</span>
        <span>Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Laudantium, ducimus.</span>
        <button className='rbutton'>LearnMore</button>

      </motion.div>
      <motion.div className='ui'
      initial={{translateX:'120px'}}
      whileInView={{translateX:'-20px'}}
      transition={{duration: 3, type:'spring'}}
      >
        <img src={cool} alt=""/>
        <span>UI/UX</span>
        <span>Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Laudantium, ducimus.</span>
        <button className='rbutton'>LearnMore</button>

      </motion.div>
    </div>
  </div>
  
  )
}

export default Service
