import React from 'react';
import {useParams} from "react-router-dom";
import useStore from "../store/main";

const MedicationCard = ({meds, setModalDel, setDeleteMedic, setModalEdit, setIdEdit, setDefSec, setDefOne}) => {


    const {loggedInDoctor, loggedInPatient} = useStore((state) => state);
    const {id} = useParams();


    function editOnclick() {
        setModalEdit(true)
        setIdEdit(meds._id)
        setDefOne(meds.name)
        setDefSec(meds.description)
    }

    return (
        <div className='pad2 col-12 col-sm-4 col-md-3 col-xl-2 d-flex'>
            <div className='text-center rounded-2 p-2 medicCard d-flex flex-column align-items-center grow1 justify-content-between'>
                <div>
                    <div className='my-2 fs-5'>{meds.name}</div>
                    <small>{meds.description}</small>
                </div>


                {loggedInDoctor && <div className='mt-2'>
                    <button onClick={() => {
                        editOnclick()
                    }}
                            className='btnBgGreen'>EDIT
                    </button>
                    <button
                        onClick={() => {
                            setModalDel(true)
                            setDeleteMedic(meds)
                        }}
                        className='btnTxtGreen ms-1'>DELETE
                    </button>
                </div>}
            </div>

        </div>
    );
};

export default MedicationCard;