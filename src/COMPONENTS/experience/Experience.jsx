import React from 'react'
import './experience.css';
import {motion} from 'framer-motion';
import { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../../contextapi'

  
const Experience = () => {
  const {state}=useContext(GlobalContext);
  

  return (
    <div className='exp'>
    <div className='expdata'>
      <div className='circle'
      >years 9+</div>
      <span className='sp'>product</span>
      <span className='sp sp2'>experience</span>
    </div>

    <div className='expdata'>
      <div
    
       className='circle'>years 7+</div>
      <span className='sp'>product</span>
      <span className='sp sp2'>experience</span>
    </div>

    <div
     
    className='expdata'>
      <div className='circle'>years 5+</div>
      <span className='sp'>product</span>
      <span className='sp sp2'>experience</span>
    </div>
  </div>
  )
}

export default Experience
