import React from 'react'
import './worker.css';
import github from '../../images/github.png'
import boy from '../../images/boy.png'
import cool from '../../images/cool.png'
import facebook from '../../images/facebook.png'
import happy from '../../images/happy.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'
import {motion} from 'framer-motion';

const Worker = () => {
  return (
    <div className='worker'>
    <div className='ileft'>
      <div className='itext'>
        <span style={{color:'black'}}>Works for All these</span>
        <span className="brand">Brands & Clients</span>
        <span>Lorem ipsum dolor
          sit amet consectetur <br/> adipisicing elit. Illo, optio.
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <br /> Sunt, labore.
          adipisicing elit. <br /> Illo, optio.
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <br /> Sunt, labore.
          adipisicing <br /> elit. Illo, optio.
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <br /> Sunt, labore.
        </span>
      </div>
      <button className='button ibutton'>hire me</button>

    </div>
    <div className='wright'>
      <motion.div
      initial={{rotate:'0px'}}
      whileInView={{rotate:'360deg'}}
      transition={{duration: 9, type:'spring'}}
      
      className='maincircle'>
        <div className='seccircle'>
          <img src={github} alt="" />
        </div>
        <div className='seccircle'>
          <img src={facebook} alt="" />
        </div>
        <div className='seccircle'>
          <img src={twitter} alt="" />

        </div>
        <div className='seccircle'>
          <img src={whatsapp} alt="" />

        </div>
        <div className='seccircle'>
          <img src={linkedin} alt="" />
        </div>
      </motion.div>
      <div className='bg blue'></div>
      <div className='bg yellow'></div>
    </div>

  </div>
)
}

export default Worker
