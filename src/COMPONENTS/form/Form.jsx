import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div className='form'>
        <div className="fleft">
            <span>Get in touch</span>
            <span>Contact me</span>
        </div>
        <div className="fright">
            <form action="">
                <input type="text" placeholder='enter name' />
                <input type="email"  placeholder='enter email '/>
                <textarea placeholder='enter message '></textarea>
                <button className='button' type='submit'>sumbit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Form
