import React, {useRef} from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";
import http from '../plugin/https'

const LoginPage = () => {

    const {setLoggedInDoctor, setLoggedInPatient, mainLink} = useStore((state) => state);
    const navigate = useNavigate();

    const doctorNameRef = useRef(null);
    const doctorPassRef = useRef(null);

    const patientEmailRef = useRef(null);
    const patientPassRef = useRef(null);


    function loginDoctor() {

        const item = {
            username: doctorNameRef.current.value,
            password: doctorPassRef.current.value
        }

        http.post('/login', item)
            .then(data => {
                if (!data.success) console.log(data)
                if (data.success) {
                    localStorage.setItem("token", data.token)
                    setLoggedInDoctor(data.myUser)
                    navigate(mainLink + "/")
                }
            })

    }

    function loginPatient() {
        const item = {
            client_email: patientEmailRef.current.value,
            password: patientPassRef.current.value
        }

        http.post('/loginuser', item)
            .then(data => {
                if (!data.success) console.log(data)
                if (data.success) {
                    localStorage.setItem("token", data.token)
                    setLoggedInPatient(patientEmailRef.current.value)
                    navigate(mainLink + "/")
                }
            })
    }

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center gap-2 flex-wrap'>
                <div className='d-flex flex-column align-items-center gap-1'>
                    <div>Login for doctor</div>
                    <input className='inputBlue' type="text" placeholder='username' ref={doctorNameRef}
                           defaultValue="doctor"/>
                    <input className='inputBlue' type="password" placeholder='password' ref={doctorPassRef}
                           defaultValue="doctor"/>
                    <div>
                        <button className='btn btnBgGreen' onClick={loginDoctor}>Login</button>
                    </div>

                </div>
                <div className='d-flex flex-column align-items-center gap-1'>
                    <div>Login for patient</div>
                    <input className='inputBlue' type="text" placeholder='email' ref={patientEmailRef}
                           defaultValue="email@email.com"/>
                    <input className='inputBlue' type="password" placeholder='password' ref={patientPassRef}
                           defaultValue="email@email.com"/>
                    <div>
                        <button className='btn btnBgGreen' onClick={loginPatient}>Login</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default LoginPage;