import {useState, useRef} from 'react';
import useStore from "../store/main";
import http from '../plugin/https'

const UserPage = () => {

    const {loggedInDoctor, loggedInPatient, setLoggedInDoctor, setLoggedInPatient} = useStore((state) => state);
    const [error, setError] = useState(null);

    const passwordRef = useRef(null);
    const passOneRef = useRef(null);
    const passTwoRef = useRef(null);

    const imageRef = useRef(null);

    function updatePassword() {
       const item = {
           password: passwordRef.current.value,
           passOne: passOneRef.current.value,
           passTwo: passTwoRef.current.value
       }

       http.postToken('/updatepass', item)
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

    function updateImg() {
        const item = {
            image: imageRef.current.value,
        }

        http.postToken('/updateimg', item)
            .then(data => {
                if(!data.success) setError(data.message)
                if(data.success) {
                    if(loggedInDoctor) setLoggedInDoctor(data.myUser)
                    if(loggedInPatient) setLoggedInPatient(data.myUser)

                    setError(data.message);
                    imageRef.current.value = null;
                }
            })
    }


    return (
        <div className='container-fluid'>
            <div className='container d-flex flex-column align-items-center gap-2'>
                <div className='mw300px w-100 userPage d-flex gap-2'>
                    {loggedInDoctor && <div><img src={loggedInDoctor.image} alt=""/></div>}
                    {loggedInDoctor && <h5><b className='txtGreen'>pethea Doctor:</b> {loggedInDoctor.name}</h5>}
                    {loggedInPatient && <div><img src={loggedInPatient.image} alt=""/></div>}
                    {loggedInPatient && <h5><b className='txtGreen'>pethea Patient:</b> {loggedInPatient.client_email}</h5>}
                </div>
                <div className='userPageUpdate rounded-2 p-2 w-100 d-flex flex-column gap-1'>
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
                <div className='userPageUpdate rounded-2 p-2 w-100 d-flex flex-column gap-1'>
                    <div>New image</div>
                    <input className='inputBlue' type="text" ref={imageRef}/>
                    {error && <div>{error}</div>}
                    <div className='d-flex justify-content-center'>
                        <button className='btnBgGreen'
                                onClick={updateImg}>UPDATE IMAGE
                        </button>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default UserPage;