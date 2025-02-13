import React from 'react';
import useStore from "../store/main";


const IndexPage = () => {

    const {loggedInDoctor, loggedInPatient} = useStore((state) => state);


    return (
        <div className='mx-2'>
            <div>login with doctor: username > "doctor", password > "doctor"</div>
            <div>login with patient: patient email > password email</div>
        </div>
    );
};

export default IndexPage;