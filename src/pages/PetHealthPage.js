import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import LogPresComp from "../components/LogPresComp";
import ModalComp from "../components/ModalComp";
import useStore from "../store/main";


const PetHealthPage = () => {

    const {id} = useParams();
    const {loggedInDoctor} = useStore((state) => state);

    const [pets, setPets] = useState(null);
    const [logs, setLogs] = useState(null);
    const [pres, setPres] = useState(null);

    const [change, setChange] = useState(false);

    const options = {
        method: "GET",
        headers: {
            authorization: localStorage.getItem('token')
        }
    }

    useEffect(() => {

        fetch('http://localhost:2001/pets/' + id, options)
            .then(res => res.json())
            .then(data => {
                if(!data.success)console.log(data)
                if(data.success) {
                    setPets(data.pet)
                    fetch('http://localhost:2001/preslogs/' + id, options)
                        .then(res => res.json())
                        .then(pet => {
                            setPres(pet.pres)
                            setLogs(pet.logs)
                        })
                }
            })
    },[change])

    const [displayLogs, setDisplayLogs] = useState(true);
    const [displayPres, setDisplayPres] = useState(true);

    // Modal add prescription
    const [modalObjPres, setModalObjPres] = useState({
        title: 'Add prescription',
        inpSelect: 'Medication'
    })
    const [modalPres, setModalPres] = useState(false)
    const handleClosePres = () => {setModalPres(false)};
    const handleShowPres = () => setModalPres(true);
    useEffect(() => {}, [modalPres])

    // Modal add log
    const [modalObjLogs, setModalObjLogs] = useState({
        title: 'Add log',
        inpTwo: 'Description'
    })
    const [modalLogs, setModalLogs] = useState(false)
    const handleCloseLogs = () => {setModalLogs(false)};
    const handleShowLogs = () => setModalLogs(true);
    useEffect(() => {}, [modalLogs])


    // Add prescription and log function
    async function addPresLogs(description, date){

        let PresMeds = null
        let newPresLogs = {
            "pet_id": id,
            "description": description,
            "date": date
        };

        if(modalPres) {
            PresMeds = "pres"
        }
        if(modalLogs) PresMeds = "logs"

        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("token")
            },
            body: JSON.stringify(newPresLogs)
        };

        await fetch(`http://localhost:2001/${PresMeds}`, option)
        setModalPres(false)
        setModalLogs(false)
        setChange(!change)

    }

    return (
        <div className='mx-2'>
            {pets && <div>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <h2 className=''>{pets.name}: Health Records</h2>
                    {loggedInDoctor && <div>
                        <button onClick={handleShowPres}
                                className='btnBgGreen'>ADD PRESCRIPTION
                        </button>
                        <button onClick={handleShowLogs}
                                className='btnTxtGreen ms-1'>ADD LOG
                        </button>
                    </div>}
                </div>

                <div className='d-flex mb-2 align-items-center gap-1'>
                    <div>Display:</div>

                    <button onClick={() => setDisplayLogs(!displayLogs)}
                        className={displayLogs? 'btnBgGreen':'btnTxtGreen'}>
                        LOGS
                        {displayLogs? <b className="ms-1"> ✔ </b>:''}
                    </button>

                    <button onClick={() => setDisplayPres(!displayPres)}
                            className={displayPres ? 'btnBgGreen' : 'btnTxtGreen'}>
                        PRESCRIPTION
                        {displayPres? <b className="ms-1"> ✔ </b>:''}
                    </button>
                </div>

                <div className='d-flex flex-wrap '>
                    {logs && displayLogs && logs.map((x) => <LogPresComp key={x._id} item={x}/>)}

                    {pres && displayPres && pres.map((x) => <LogPresComp key={x._id} item={x}/>)}
                </div>

                {modalPres && loggedInDoctor && <ModalComp
                    handleClose={handleClosePres}
                    modal={modalPres}
                    addAdd={addPresLogs}
                    modalObj={modalObjPres}
                />}

                {modalLogs && loggedInDoctor && <ModalComp
                    handleClose={handleCloseLogs}
                    modal={modalLogs}
                    addAdd={addPresLogs}
                    modalObj={modalObjLogs}
                />}
            </div>
            }
        </div>
    );
};

export default PetHealthPage;