import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyButton2 = styled(LoadingButton)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '8px 12px',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
  '&:disabled': {
    backgroundColor: '#59A9FF',
    color:"white"
  },
});
export default function LoadingButtonsTransition({handleSubmit,loading}) {

  return (
    <div>

      <Box>
        <MyButton2
       loading={loading}
       loadingPosition="end"
          className='w-full'
          onClick={handleSubmit}
   
          variant="contained"
        >
          <span>Continue</span>
        </MyButton2>

      </Box>
    </div>
  );
}
