import {useState, useRef} from 'react';
import useStore from "../store/main";

const UserPage = () => {

    const {loggedInDoctor, loggedInPatient} = useStore((state) => state);
    const [error, setError] = useState(null);

    const passwordRef = useRef(null);
    const passOneRef = useRef(null);
    const passTwoRef = useRef(null);


    function updatePassword() {
       const item = {
           password: passwordRef.current.value,
           passOne: passOneRef.current.value,
           passTwo: passTwoRef.current.value
       }

       const options = {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               authorization: localStorage.getItem("token")
           },
           body: JSON.stringify(item)
       }

        fetch('http://localhost:2001/updatepass', options)
            .then(res => res.json())
            .then(data => {
                if(!data.success) setError(data.message)
                if(data.success) {
                    setError(data.message);
                    passwordRef.current.value = null;
                    passOneRef.current.value = null;
                    passTwoRef.current.value = null;
                }
            })
    }


    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className='mw300px w-100'>
                {loggedInDoctor && <h5> <b className='txtGreen'>pethea doctor:</b> {loggedInDoctor}</h5>}
                {loggedInPatient && <h5> <b className='txtGreen'>pethea patient:</b> {loggedInPatient}</h5>}
            </div>
            <div className='userPage rounded-2 p-2 w-100 d-flex flex-column gap-1'>
                <div>Password</div>
                <input className='inputBlue' type="password" ref={passwordRef}/>
                <div>New password</div>
                <input className='inputBlue' type="password" ref={passOneRef}/>
                <div>Repeat new password</div>
                <input className='inputBlue' type="password" ref={passTwoRef}/>
                {error && <div>{error}</div>}
                <div className='d-flex justify-content-center'>
                    <button className='btnBgGreen'
                            onClick={updatePassword}>UPDATE PASSWORD
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserPage;