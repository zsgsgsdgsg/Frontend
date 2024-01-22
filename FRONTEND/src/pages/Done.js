import React from 'react'
import "./Done.css"
const Done = () => {
  return (
    <div>
      <div id="notfound">
    <div class="notfound">
        <div class="notfound-404 flex justify-center">
            <img src="assets/tick-mark.png" className="w-40 h-40"/>
        </div>
        <h2 className='py-2'>Your appeal has been submitted successfully.</h2>
        <p className='py-2'>We will notify you of next steps if further verification is required. Usually you will receive a response in 1 to 2 days. </p>
        <a href="https://m.facebook.com/" id='butto'>GO TO HOME</a>
    </div>
</div>
    </div>
  )
}

export default Done