import React, {useRef, useState} from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";
import http from '../plugin/https'

const LoginPage = () => {

    const {setLoggedInDoctor, setLoggedInPatient} = useStore((state) => state);
    const navigate = useNavigate();

    const doctorNameRef = useRef(null);
    const doctorPassRef = useRef(null);

    const patientEmailRef = useRef(null);
    const patientPassRef = useRef(null);

    const [errorDoc, setErrorDoc] = useState(null);
    const [errorPat, setErrorPat] = useState(null);

    function loginDoctor() {
        setErrorDoc(null)
        setErrorPat(null)
        const item = {
            username: doctorNameRef.current.value,
            password: doctorPassRef.current.value
        }

        http.post('/login', item)
            .then(data => {
                if (!data.success) setErrorDoc(data.message)
                if (data.success) {
                    localStorage.setItem("token", data.token)
                    setLoggedInDoctor(data.myUser)
                    navigate("/")
                }
            })

    }

    function loginPatient() {
        setErrorPat(null)
        setErrorDoc(null)
        const item = {
            client_email: patientEmailRef.current.value,
            password: patientPassRef.current.value
        }

        http.post('/loginuser', item)
            .then(data => {
                if (!data.success) setErrorPat(data.message)
                if (data.success) {
                    localStorage.setItem("token", data.token)
                    setLoggedInPatient(data.myUser)
                    navigate("/")
                }
            })
    }

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center gap-2 flex-wrap'>
                <div className='shadow p-2 rounded-2 d-flex flex-column align-items-center gap-1'>
                    <div>Login doctor</div>
                    <input className='inputBlue' type="text" placeholder='username' ref={doctorNameRef}
                           defaultValue="doctor"/>
                    <input className='inputBlue' type="password" placeholder='password' ref={doctorPassRef}
                           defaultValue="doctor"/>
                    {errorDoc && <div>{errorDoc}</div>}
                    <div>
                        <button className='btn btnBgGreen' onClick={loginDoctor}>Login</button>
                    </div>

                </div>
                <div className='shadow p-2 rounded-2 d-flex flex-column align-items-center gap-1'>
                    <div>Login user</div>
                    <input className='inputBlue' type="text" placeholder='email' ref={patientEmailRef}
                           defaultValue="email@email.com"/>
                    <input className='inputBlue' type="password" placeholder='password' ref={patientPassRef}
                           defaultValue="email@email.com"/>
                    {errorPat && <div>{errorPat}</div>}
                    <div>
                        <button className='btn btnBgGreen' onClick={loginPatient}>Login</button>
                    </div>
                </div>


                {/*/!*test && update inputs with forms*!/*/}
                {/*<form action="">*/}
                {/*    <input type="text" placeholder='first'/>*/}
                {/*    <input type="text" placeholder='second'/>*/}
                {/*    <button type='submit'>submit</button>*/}
                {/*</form>*/}


            </div>
        </div>

    );
};

export default LoginPage;