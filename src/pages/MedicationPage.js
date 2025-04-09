import React, {useState, useEffect} from 'react';
import MedicationCard from "../cards/MedicationCard";
import DeleteModalComp from "../components/DeleteModalComp";
import ModalComp from "../components/ModalComp";
import useStore from "../store/main";
import http from '../plugin/https'
const MedicationPage = () => {

    const [meds, setMeds] = useState(null);
    const [change, setChange] = useState(false);

    const {loggedInDoctor, loggedInPatient} = useStore((state) => state);

    useEffect(() => {
        http.getToken('/meds')
            .then(data => {
                if(!data.success)console.log(data)
                if(data.success) {
                    setMeds(data.meds)
                }
            })
    },[change])


    // Add medications modal parts
    const [modalObj, setModalObj] = useState({
        title: 'Add medications',
        inpOne: 'Medication title',
        inpTwo: 'Description'
    })
    const [modal, setModal] = useState(false)
    const handleClose = () => {
        setModal(false)
    };
    const handleShow = () => setModal(true);


    // Edit medication modal parts
    const [editModalObj, setEditModalObj] = useState({
        title: 'Edit medication',
        inpOne: 'Medication title',
        inpTwo: 'Description'
    })
    const [modalEdit, setModalEdit] = useState(false)
    const [idEdit, setIdEdit] = useState(null);
    const [defOne, setDefOne] = useState(null)
    const [defSec, setDefSec] = useState(null)
    const handleCloseEdit = () => {
        setModalEdit(false)
    };


    // Delete medication modal parts
    const [modalDel, setModalDel] = useState(false)
    const [deleteMedic, setDeleteMedic] = useState(null);
    const handleCloseDel = () => {
        setModalDel(false)
        setDeleteMedic(null)
    }


    useEffect(() => {}, [modalDel])
    useEffect(() => {}, [modalEdit])
    useEffect(() => {}, [modal])


    // Add medications function
    function addMedic(name, description) {

        const newMed = {
            "name": name,
            "description": description
        };

        http.postToken("/addmedc", newMed)
            .then(data => {
                setModal(false)
                setChange(!change)
            })
    }


    // Edit medication function
    function editMedic(name, description) {
        if (idEdit) {
            const editMed = {
                "name": name,
                "description": description
            };
            http.postToken("/medsedite/" + idEdit, editMed)
                .then(data => {
                    setModalEdit(false)
                    setIdEdit(null)
                    setChange(!change)
                })
        }
    }


    // Delete medication function
    function deleteMedicFunc() {
        http.postToken("/medsdelete/" + deleteMedic._id)
            .then(() => {
                setModalDel(false)
                setChange(!change)
            })
    }


    return (
        <div className='container-fluid'>
            <div className='medicList container d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <h2 className=''>Medication List</h2>
                    {loggedInDoctor && <button onClick={handleShow} className='btnBgGreen'>ADD MEDICATION</button>}
                </div>

                <div className='row mx-1 mx-sm-0 w-100 medic-grid'>

                    {meds && meds.map(x => <MedicationCard
                        meds={x}
                        key={x._id}

                        setModalDel={setModalDel}
                        setDeleteMedic={setDeleteMedic}

                        setModalEdit={setModalEdit}
                        setIdEdit={setIdEdit}
                        setDefOne={setDefOne}
                        setDefSec={setDefSec}
                    />)}

                    {/*modal add medication*/}
                    {modal && <ModalComp
                        handleClose={handleClose}
                        modal={modal}
                        addAdd={addMedic}
                        modalObj={modalObj}
                        defOne={null}
                        defSec={null}
                    />}


                    {/*modal edit medication*/}
                    {modalEdit && <ModalComp
                        handleClose={handleCloseEdit}
                        modal={modalEdit}
                        addAdd={editMedic}
                        modalObj={editModalObj}
                        idEdit={idEdit}
                        defOne={defOne}
                        defSec={defSec}
                    />}


                    {/*modal delete medication*/}
                    {modalDel && <DeleteModalComp
                        item={deleteMedic}
                        modalDel={modalDel}
                        handleCloseDel={handleCloseDel}
                        deleteFunc={deleteMedicFunc}
                    />}
                </div>
            </div>
        </div>


    );
};

export default MedicationPage;