import React from 'react';

const AboutPage = () => {
    return (
        <div className='container-fluid'>

            <div className='container-xxl'>
                <div>
                    <div className='mb-3'>
                        <h1>About me</h1>
                        <p>I am junior programmer. I just finished courses at CodeAcademy.</p>
                        <a href="https://www.linkedin.com/in/gytis-raginskas" target={"_blank"}>LinkedIn</a>
                        <br/>
                        <a href="https://github.com/GytRag/" target={"_blank"}>GitHub</a>
                    </div>

                    <div className='mb-3'>
                        <h1>About project</h1>
                        <a href="https://github.com/GytRag/pethea_react" target={"_blank"}>GitHub front code</a>
                        <br/>
                        <a href="https://github.com/GytRag/pethea_node" target={"_blank"}>GitHub back code</a>
                        <div className='mt-2'>
                            <div>Patient(user):</div>
                            <ul>
                                <li>Register</li>
                                <li>Log in</li>
                                <li>Edit profile</li>
                                <li>Check medications</li>
                                <li>View the pet log</li>
                                <li>View the prescribed medications for the pet</li>
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <div>Doctor:</div>
                            <ul>
                                <li>Register with special code</li>
                                <li>Log in</li>
                                <li>Edit profile</li>
                                <li>Check & add & update medications</li>
                                <li>Add new pet with the pet owner email</li>
                                <li>View & add pet log</li>
                                <li>View & add medications for your pet</li>
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <div>When new pet is added by doctor</div>
                            <ul>
                                <li>A new user is automatically created if the user does not exist, if the user exists
                                    the pet is added to their pet list
                                </li>
                                <li>A new user can log in using their email, the password is the same as their email, so
                                    you need to change it when logging in
                                </li>
                                <li>An existing user can log in using their credentials</li>
                            </ul>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <h1>What new will be added</h1>
                        <div className='mt-2'>
                            <ul>
                                <li>Create & read & update post for users & doctors</li>
                                <li>Live chat using socket.io</li>
                                <li>If you want to check out the socket.io code <a href="http://213.136.82.182:4000/"
                                                                                   target='_blank'>CRUD + live chat</a>,
                                    github project <a
                                        href="https://github.com/GytRag/final_work_node" target='_blank'>back</a> <a
                                        href="https://github.com/GytRag/final_work_react" target='_blank'>front</a></li>
                                <li>& more content later...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;