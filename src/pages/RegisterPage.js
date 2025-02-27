import React, {useRef} from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";
import http from '../plugin/https'

const RegisterPage = () => {

    const doctorNameRef = useRef(null);
    const passOneRef = useRef(null);
    const passTwoRef = useRef(null);
    const specialCodeRef = useRef(null);


    function registerDoctor() {

        const newDoctor = {
            username: doctorNameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            special_code: specialCodeRef.current.value
        }

        http.post('http://localhost:2001/register', newDoctor)
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center gap-2'>
                <div className='d-flex flex-column align-items-center gap-1'>
                    <div>Register for doctor</div>
                    <input className='inputBlue' type="text" placeholder='username' ref={doctorNameRef}/>
                    <input className='inputBlue' type="password" placeholder='password' ref={passOneRef}/>
                    <input className='inputBlue' type="password" placeholder='password' ref={passTwoRef}/>
                    <input className='inputBlue' type="password" placeholder='special code' ref={specialCodeRef}/>
                    <div>
                        <button className='btn btnBgGreen' onClick={registerDoctor}>Register</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default RegisterPage;