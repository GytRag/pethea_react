import React, {useEffect, useRef, useState} from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";
import http from '../plugin/https'

const RegisterPage = () => {

    const nameRef = useRef(null);
    const passOneRef = useRef(null);
    const passTwoRef = useRef(null);
    const specialCodeRef = useRef(null);
    const selectRef = useRef(null)
    const [select, setSelect] = useState(null);
    const [error, setError] = useState(false);

    const nav = useNavigate()

    useEffect(() => {}, [error, select])

    function registerDoctor() {
        setError(null)

        let newUser = {
            username: nameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            special_code: specialCodeRef.current.value
        }

        http.post('/register', newUser)
            .then(data => {
                setError(data.message);
                if(data.success) nav('/login')
            })
    }

    function check() {
       setSelect(selectRef.current.value)
        setError(null)
    }

    function registerUser() {
        setError(null)

        let newUser = {
            email: nameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
        }

        http.post('/registerUser', newUser)
            .then(data => {
                setError(data.message);
                if(data.success) nav('/login')
            })
    }

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center gap-2'>
                <div className='shadow p-2 rounded-2'>

                    <div className='d-flex flex-column align-items-center gap-1 mb-2'>
                        <div>Please select what you want to register</div>
                        <select onChange={check} ref={selectRef}>
                            <option>-</option>
                            <option>Register user</option>
                            <option>Register doctor</option>
                        </select>
                    </div>

                    {select === 'Register doctor' && <div className='d-flex flex-column align-items-center gap-1'>
                        <input className='inputBlue' type="text" placeholder='username' ref={nameRef}/>
                        <input className='inputBlue' type="password" placeholder='password' ref={passOneRef}/>
                        <input className='inputBlue' type="password" placeholder='password' ref={passTwoRef}/>
                        <input className='inputBlue' type="password" placeholder='special code' ref={specialCodeRef}/>
                        {error && <div>{error}</div>}
                        <div>
                            <button className='btn btnBgGreen' onClick={registerDoctor}>Register</button>
                        </div>
                    </div>}

                    {select === 'Register user' && <div className='d-flex flex-column align-items-center gap-1'>
                        <input className='inputBlue' type="text" placeholder='email' ref={nameRef}/>
                        <input className='inputBlue' type="password" placeholder='password' ref={passOneRef}/>
                        <input className='inputBlue' type="password" placeholder='password' ref={passTwoRef}/>
                        {error && <div>{error}</div>}
                        <div>
                            <button className='btn btnBgGreen' onClick={registerUser}>Register</button>
                        </div>
                    </div>}

                </div>


            </div>
        </div>

    );
};

export default RegisterPage;