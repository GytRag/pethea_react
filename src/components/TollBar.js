import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import pethea from '../images/pethea.png'
import Dropdown from 'react-bootstrap/Dropdown';
import useStore from "../store/main";


const TollBar = () => {

    const {loggedInDoctor,
        loggedInPatient,
        setLoggedInDoctor,
        setLoggedInPatient,
        clickedPage,
        setClickedPage} = useStore((state) => state);

    const navigate = useNavigate();


    function logout() {
        setLoggedInDoctor(null);
        setLoggedInPatient(null);
        localStorage.removeItem("token");
        navigate("/");
    }


    return (
        <div className='rounded-2 m-2 py-1 px-2 tollbar d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
                <img src={pethea} alt="pethea"/>
            </div>

            <Dropdown className='d-block d-sm-none'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropBgGreen'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeLinecap={"round"} strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                        <path d="M4 6l16 0"></path>
                        <path d="M4 12l16 0"></path>
                        <path d="M4 18l16 0"></path>
                    </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                        <Link to='/' className={clickedPage === 'About' ? 'link link-clicked' : 'link'}
                              onClick={() => setClickedPage('About')}
                        >About</Link>
                    </Dropdown.Item>

                    {loggedInDoctor && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                        <Link to='/pets' className={clickedPage === 'Pets' ? 'link link-clicked' : 'link'}
                              onClick={() => setClickedPage('Pets')}>
                            Pets
                        </Link>
                    </Dropdown.Item>}

                    {loggedInPatient &&  <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                        <Link to='/mypets' className={clickedPage === 'My pets' ? 'link link-clicked' : 'link'}
                              onClick={() => setClickedPage('My pets')}>
                            My pets
                        </Link>
                    </Dropdown.Item>}

                    {(loggedInDoctor || loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <Link to='/medication' className={clickedPage === 'Medications' ? 'link link-clicked' : 'link'}
                                  onClick={() => setClickedPage('Medications')}>
                                Medications
                            </Link>
                    </Dropdown.Item>}

                    {(loggedInDoctor || loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <Link to='/user' className={clickedPage === 'User' ? 'link link-clicked' : 'link'}
                                  onClick={() => setClickedPage('User')}>
                                User
                            </Link>
                    </Dropdown.Item>}

                    {(!loggedInDoctor && !loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <Link to='/login' className={clickedPage === 'Login' ? 'link link-clicked' : 'link'}
                                  onClick={() => setClickedPage('Login')}>
                                Login
                            </Link>
                    </Dropdown.Item>}

                    {(!loggedInDoctor && !loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <Link to='/register' className={clickedPage === 'Register' ? 'link link-clicked' : 'link'}
                                  onClick={() => setClickedPage('Register')}>
                                Register
                            </Link>
                    </Dropdown.Item>}

                        {(loggedInDoctor || loggedInPatient) &&
                            <button onClick={logout}
                                    className='btnLog btn ms-1'>
                                Logout</button>}
                </Dropdown.Menu>
            </Dropdown>

            <div className='d-sm-flex gap-2 d-none align-items-center'>
                <Link to='/'
                      className={clickedPage === 'About' ? 'link link-clicked' : 'link'}
                      onClick={() => setClickedPage('About')}
                >About
                </Link>

                {loggedInDoctor && <Link to='/pets'
                     className={clickedPage === 'Pets' ? 'link link-clicked' : 'link'}
                     onClick={() => setClickedPage('Pets')}
                >Pets
                </Link>}

                {loggedInPatient && <Link to='/mypets'
                       className={clickedPage === 'My pets' ? 'link link-clicked' : 'link'}
                       onClick={() => setClickedPage('My pets')}
                >My pets
                </Link>}

                {(loggedInDoctor || loggedInPatient) && <Link to='/medication'
                      className={clickedPage === 'Medications' ? 'link link-clicked' : 'link'}
                      onClick={() => setClickedPage('Medications')}
                >Medications
                </Link>}

                {(loggedInDoctor || loggedInPatient) && <Link to='/user'
                      className={clickedPage === 'User' ? 'link link-clicked' : 'link'}
                      onClick={() => setClickedPage('User')}
                >User
                </Link>}


                {(loggedInDoctor || loggedInPatient) && <button onClick={logout} className='btnLog btn'>Logout</button>}

                {(!loggedInDoctor && !loggedInPatient) && <Link to='/login'
                         className={clickedPage === 'Login' ? 'link link-clicked' : 'link'}
                         onClick={() => setClickedPage('Login')}
                >Login
                </Link>}

                {(!loggedInDoctor && !loggedInPatient) && <Link to='/register'
                       className={clickedPage === 'Register' ? 'link link-clicked' : 'link'}
                       onClick={() => setClickedPage('Register')}
                >Register
                </Link>}


            </div>
        </div>
    );
};

export default TollBar;