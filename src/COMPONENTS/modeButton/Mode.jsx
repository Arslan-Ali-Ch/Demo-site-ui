import React from 'react'
import './mode.css'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../../contextapi'

const Mode = () => {
    const {state,dispatch}=useContext(GlobalContext);
  function handle(){
    dispatch({
        type:'change'
    })
  }
  return (
    <div className='toggle' onClick={handle}>
        <Moon/>
        <Sun/>
        <div 
        style={state.dark? {left:'2px'}:{right:'2px'}}
        className='t-button'></div>
      
    </div>
  )
}

export default Mode
