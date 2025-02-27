import React, {useState, useRef, useEffect} from 'react';
import PetCard from "../components/PetCard";
import ModalComp from "../components/ModalComp";
import DeleteModalComp from "../components/DeleteModalComp";
import http from '../plugin/https'


const PetPage = () => {

    const [pets, setPets] = useState(null);
    const [change, setChange] = useState(false);

    useEffect(() => {
        http.getToken('http://localhost:2001/pets')
            .then(data => {
                if(!data.success) console.log(data)
                if(data.success) setPets(data.pets)
            })
    },[change])



    // Add pet modal parts
    const [modalObj, setModalObj] = useState({
        title: 'Add pet',
        inpOne: 'Pet name',
        inpTwo: 'Email'
    })
    const [modal, setModal] = useState(false)
    const handleClose = () => {setModal(false)};
    const handleShow = () => setModal(true);
    useEffect(() => {}, [modal])


    // Delete pet modal parts
    const [modalDel, setModalDel] = useState(false)
    const [deletePet, setDeletePet] = useState(null);
    const handleCloseDel = () => {
        setModalDel(false)
        setDeletePet(null)
    }
    useEffect(() => {}, [modalDel])


    function addPet(name, email, dob){

        const newPet = {
            "name": name,
            "dob": dob,
            "client_email": email
        };

        http.postToken("http://localhost:2001/addpet", newPet)
            .then(data => {
                setModal(false)
                if(!data.success) console.log(data)
                if(data.success) {
                    setChange(!change)
                }

            })
    }

    function deletePetFunc(){

        const item = {
            id: deletePet._id
        }

        http.postToken("http://localhost:2001/deletepet", item)
        setModalDel(false)
        setChange(!change)
    }


    return (
        <div className='container-fluid'>
            <div className='petList container d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <h2 className=''>Pet List</h2>
                    <button onClick={handleShow} className='btnBgGreen'>ADD PET</button>
                </div>

                <div className='row mx-1 mx-sm-0 w-100 pet-grid'>
                    {pets && pets.map((pet) => <PetCard key={pet._id}
                                                        pet={pet}
                                                        setModalDel={setModalDel}
                                                        setDeletePet={setDeletePet}/>)}
                </div>


                {modal && <ModalComp
                    handleClose={handleClose}
                    modal={modal}
                    addAdd={addPet}
                    modalObj={modalObj}
                />}

                {modalDel && <DeleteModalComp
                    item={deletePet}
                    modalDel={modalDel}
                    handleCloseDel={handleCloseDel}
                    deleteFunc={deletePetFunc}
                />}

            </div>
        </div>

    );
};

export default PetPage;