import React from 'react'
import "./Header.css"
const Header = () => {
    const headerStyle = {
        background: `url('/assets/baner.jpg')`, 
        backgroundSize: 'cover', 
      };
  return (
    <div className="h-40 text-white flex text-center justify-center flex-col items-center gap-4" style={headerStyle}>
        <p className='text-md font-semibold tracking-[0.2rem]'>Facebook Bussiness Help Center</p>
        <p className='text-4xl font-semibold tracking-[0.2rem]'>How can we help you?</p>
    </div>
  )
}

export default Header