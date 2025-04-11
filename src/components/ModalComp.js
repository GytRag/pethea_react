import React, {useRef, useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import useStore from "../store/main";
import http from "../plugin/https";

const ModalComp = ({handleClose, modal, addAdd, modalObj, defOne, defSec}) => {

    const {medication, updateMedication} = useStore((state) => state);

    const [error, setError] = useState(null);
    const [inputDate, setInputDate] = useState(false);

    const firsRef = useRef()
    const secRef = useRef()
    const thirdRef = useRef()
    const selectRef = useRef()

    if(!inputDate){
        if(modalObj.title === 'Add pet' || modalObj.title === 'Add log'
            || modalObj.title === 'Add prescription')setInputDate(true);
    }


    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    useEffect(() => {
        http.getToken('/meds')
            .then(data => {
                updateMedication(data.meds)
            })
    }, []);

    function newObj() {


        let firstInp = null;
        if(firsRef.current) firstInp = firsRef.current.value;

        let secInp = null;
        if(secRef.current) secInp = secRef.current.value;

        let thirdInp = null
        if(thirdRef.current) thirdInp = thirdRef.current.value;

        let selectInp = null
        if(selectRef.current) selectInp = selectRef.current.value;

        let add = false;

        if(firstInp){
            if(firstInp.length < 2 || firstInp.length > 20){
                setError(`${modalObj.inpOne} must be between 2 and 20 letters`)
            }
            else {
                if(modalObj.title === 'Add pet'){
                    if(secInp.length < 30 && validateEmail(secInp)){
                        add = true;
                    } else {setError("Invalid email address")}
                }

                else if (modalObj.title === 'Add medications') {
                    if(secInp.length < 2 || secInp.length > 50){
                        setError(`${modalObj.inpTwo} must be between 2 and 50 letters`)
                    }else {
                        addAdd(firstInp, secInp)
                        updateMedication(null)
                    }

                }
                else if (modalObj.title === 'Edit medication') {
                    if(secInp.length < 2 || secInp.length > 50){
                        setError(`${modalObj.inpTwo} must be between 2 and 50 letters`)
                    }else {
                        addAdd(firstInp, secInp)
                        updateMedication(null)
                    }

                }
            }
        }


        if(modalObj.title === 'Add pet' && add && thirdInp !== '') {
            addAdd(firstInp, secInp, thirdInp)
        }
        else if(modalObj.title === 'Add pet' && add) {setError("Invalid date of birthday")}

        if(modalObj.title === 'Add log' && thirdInp){
            addAdd(secInp, thirdInp)
        }

        if(modalObj.title === 'Add prescription' && thirdInp) {
            addAdd(selectInp, thirdInp)
        }
    }


    return (
        <Modal show={modal} onHide={handleClose}>
            <Modal.Header className='d-flex justify-content-between align-items-center'>
                <Modal.Title>{modalObj.title}</Modal.Title>
                <Button className='btnCloseGreen' onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column gap-2">
                    {modalObj.inpOne && <div>
                        <div>{modalObj.inpOne}</div>
                        <input defaultValue={defOne ? defOne : ''}
                               className='inputBlue w-100' type="text" ref={firsRef}/>
                    </div>}

                    {modalObj.inpTwo && <div>
                        <div>{modalObj.inpTwo}</div>
                        <input defaultValue={defSec ? defSec : ''}
                               className='inputBlue w-100' type="text" ref={secRef}/>
                    </div>}

                    {modalObj.inpSelect && <div>
                        <div>{modalObj.inpSelect}</div>
                        <select ref={selectRef}>
                            <option>-</option>
                            {medication && medication.map(x => <option key={x._id} value={x.name}>
                                {x.name}
                            </option>)}
                        </select>

                    </div>}

                    {inputDate &&
                        <div>
                            {modalObj.title === 'Add pet' && <div>Birthday</div>}
                            {modalObj.title !== 'Add pet' && <div>Date</div>}
                            <input className='inputBlue' type="date" ref={thirdRef}/>
                        </div>
                    }
                </div>

            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between align-items-center'>
                {error && <p>{error}</p>}
                <div className="d-flex justify-content-end grow1 gap-1">
                    <Button className='btnBgGreen' onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button className='btnTxtGreen' onClick={newObj}>
                        {modalObj.title.toUpperCase()}
                    </Button>
                </div>

            </Modal.Footer>
        </Modal>
    );
};

export default ModalComp;