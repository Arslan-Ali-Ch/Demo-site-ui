import React from 'react';
import './header.css';
import { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../../contextapi'
import Mode from '../modeButton/Mode';

const Header = () => {
  const {state}=useContext(GlobalContext);
  console.log("header "+JSON.stringify(state));
  
  return (
    <div className='main'
  >
    <div className='left'
      style={{color: state.dark? 'black':'white'}}>
        <div>my name</div>
        <Mode ></Mode>
    </div>
    <div className='right'
      style={{color: state.dark? 'black':'white'}}>
      <div className='list'>
        <ul>
          <li>home</li>
          <li>ببیبلذبلدفغ</li>
          <li>شذخعف</li>
          <li>login</li>
        </ul>
      </div>
      <button className='button btnr'>contact us</button>
    </div>
  </div>

  )
}

export default Header
