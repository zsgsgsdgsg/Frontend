import React, { useState } from 'react'
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';


const SelectForm = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="text-center pt-10">
                <p className='font-semibold text-lg'>
                    How can we help?
                </p>
                <p className='px-16 text-sm'>
                    We need moree infomation to address your issues.
                    This form will only take a few minutes.
                </p>

            </div>
            <div className={`border p-8 rounded-3xl my-4 border-gray-500 w-full `} >
                {
                    show
                        ?
                        <Form2 className={`${show ? 'hidden' : 'block'}`} setShow={setShow} />
                        :
                        <Form1 className={`${show ? 'hidden' : 'block'}`} setShow={setShow} />
                }
            </div>
        </>
    )
}

export default SelectForm