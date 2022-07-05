import React from 'react'
import'./footer.css';
import github from '../../images/github.png'
import boy from '../../images/boy.png'
import cool from '../../images/cool.png'
import facebook from '../../images/facebook.png'
import happy from '../../images/happy.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
        <span>email : shani.34667@gmail.com</span>
        <div className="ficon">
            <img src={github} alt="" />
            <img src={facebook} alt="" />
            <img src={whatsapp} alt="" />
        
        </div>
      
    </div>
  )
}

export default Footer
