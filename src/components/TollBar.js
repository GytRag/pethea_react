import {Link, useNavigate} from "react-router-dom";
import pethea from '../images/pethea.png'
import Dropdown from 'react-bootstrap/Dropdown';
import useStore from "../store/main";
import LinkComp from "./LinkComp";


const TollBar = () => {

    const {loggedInDoctor,
        loggedInPatient,
        setLoggedInDoctor,
        setLoggedInPatient
     } = useStore((state) => state);

    const navigate = useNavigate();


    function logout() {
        setLoggedInDoctor(null);
        setLoggedInPatient(null);
        localStorage.removeItem("token");
        navigate("/");
    }


    return (
        <div>
            <div className='topLine p-2'>

            </div>
            <div className='fixed-top rounded-2 m-2 py-1 px-2 tollbar d-flex justify-content-between align-items-center'>
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
                            <LinkComp linkTo={""} name={"Home"}/>
                        </Dropdown.Item>


                        <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"gallery"} name={"Gallery"}/>

                        </Dropdown.Item>

                        {loggedInDoctor && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"pets"} name={"Pets"}/>
                        </Dropdown.Item>}

                        {loggedInPatient && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"mypets"} name={"My pets"}/>
                        </Dropdown.Item>}

                        {(loggedInDoctor || loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"medication"} name={"Medications"}/>
                        </Dropdown.Item>}

                        {(loggedInDoctor || loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"user"} name={"User"}/>
                        </Dropdown.Item>}

                        {(!loggedInDoctor && !loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"login"} name={"Login"}/>
                        </Dropdown.Item>}

                        {(!loggedInDoctor && !loggedInPatient) && <Dropdown.Item tag={Link} className={'dropTxtGreen'}>
                            <LinkComp linkTo={"register"} name={"Register"}/>
                        </Dropdown.Item>}

                        {(loggedInDoctor || loggedInPatient) &&
                            <button onClick={logout} className='btnLog btn ms-1'> Logout</button>}
                    </Dropdown.Menu>
                </Dropdown>

                <div className='d-sm-flex gap-2 d-none align-items-center'>

                    <LinkComp linkTo={""} name={"Home"}/>
                    <LinkComp linkTo={"gallery"} name={"Gallery"}/>
                    {loggedInDoctor && <LinkComp linkTo={"pets"} name={"Pets"}/>}
                    {loggedInPatient && <LinkComp linkTo={"mypets"} name={"My pets"}/>}
                    {(loggedInDoctor || loggedInPatient) && <LinkComp linkTo={"medication"} name={"Medications"}/>}
                    {(loggedInDoctor || loggedInPatient) && <LinkComp linkTo={"user"} name={"User"}/>}
                    {(loggedInDoctor || loggedInPatient) &&
                        <button onClick={logout} className='btnLog btn'>Logout</button>}
                    {(!loggedInDoctor && !loggedInPatient) && <LinkComp linkTo={"login"} name={"Login"}/>}
                    {(!loggedInDoctor && !loggedInPatient) && <LinkComp linkTo={"register"} name={"Register"}/>}


                </div>
            </div>
        </div>

    );
};

export default TollBar;