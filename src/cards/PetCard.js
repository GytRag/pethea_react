import React from 'react';
import {useNavigate} from "react-router-dom";
import useStore from "../store/main";
const PetCard = ({pet, setModalDel, setDeletePet}) => {

    const navigate = useNavigate();
    const {setClickedPage, mainLink} = useStore((state) => state);
    function viewLog() {
        navigate(mainLink + "/pets/" + pet._id)
        setClickedPage("")
    }


    return (
        <div className='pad2 col-12 col-sm-4 col-md-3 col-xl-2'>
            <div className='overflow-hidden text-center rounded-2 p-2 petCard d-flex flex-column align-items-center justify-content-between'>
                <div>
                    <div className='my-2 fs-5'>{pet.name}</div>
                    <small>{pet.dob}</small>
                    <br/>
                    <small>{pet.client_email}</small>
                </div>

                <div className='mt-2'>
                    <button onClick={viewLog}
                            className='btnBgGreen'>VIEW LOG</button>

                    {setModalDel && setDeletePet && <button onClick={() => {
                        setModalDel(true)
                        setDeletePet(pet)
                    }}
                             className='btnTxtGreen ms-1'>DELETE</button>}
                </div>
            </div>

        </div>
    );
};

export default PetCard;