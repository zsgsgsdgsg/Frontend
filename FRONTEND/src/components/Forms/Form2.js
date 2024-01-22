import React, { useContext, useEffect, useState } from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { MyButton } from '../Button';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import  Modal from '../Modal';
import { MainContextContent } from '../Context';

const Form2 = () => {
    const {handleOpen,form,setForm,handleChange} = useContext(MainContextContent)
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {
       
        if (form.fullname !== "" && form.email !== "" && form.pageName !== "" && form.phone!== "") {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [form])
useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
},[])

    return (
        <div>
            <p className='text-center font-semibold pb-8'>Get Help</p>
            <form action="" className='flex flex-col'>

                <label className='text-[0.85rem] ' htmlFor="">
                    Full name
                    <input
                        onChange={handleChange}
                        value={form.fullname}
                        name="fullname"
                        type="text"
                        className='w-full border border-gray-400 focus:outline-gray-500 rounded-md p-2 text-sm' />
                </label>
                <br />
                <label className='text-[0.85rem] ' htmlFor="">
                    Personal email address
                    <input
                        onChange={handleChange}
                        value={form.email}
                        name="email"
                        type="email"
                        className='w-full border border-gray-400 focus:outline-gray-500 rounded-md p-2 text-sm' />
                </label>
                <br />

                <label className='text-[0.85rem] ' htmlFor="">
                    Phone number
                    <PhoneInput
                        country={'us'}
                        value={form.phone}
                        onChange={phone => setForm({...form,phone:phone})}
                       
                        containerStyle={{border:"1px solid #9CA3AF", borderRadius:"0.2rem"}}
                        inputStyle={{width:"100%", height:"2.5rem"}}
                        inputProps={{
                            name: 'phone',
                            required: true,
                          }}
                    />
                </label>
                <br />


                <label className='text-[0.85rem] ' htmlFor="">
                    Facebook page name
                    <input
                        onChange={handleChange}
                        value={form.pageName}
                        name="pageName"
                        type="text"
                        className='w-full border border-gray-400 focus:outline-gray-500 rounded-md p-2 text-sm' />
                </label>
                <br />
                <label className='text-[0.85rem] ' htmlFor="">
                    Please provide us information that will help us investigate
                    <textarea
                        onChange={handleChange}
                        value={form.appeal}
                        name="appeal"
                        rows={3}
                        type="text"
                        className='w-full border border-gray-400 focus:outline-gray-500 rounded-md p-2 text-sm' ></textarea>
                </label>

                <div className='flex justify-end pt-4'>
                    <MyButton
                        onClick={handleOpen}
                        disabled={disabled}
                        variant="contained"
                        startIcon={<ChatBubbleIcon />}
                        disableRipple>Start Chat</MyButton>
                </div>

            </form>
            <Modal/>
        </div>
    )
}

export default Form2