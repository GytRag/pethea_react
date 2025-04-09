import React, {useEffect, useState} from 'react';
import PetCard from "../cards/PetCard";
import http from '../plugin/https'

const MyPetPage = () => {

    const [myPets, setMyPets] = useState(null);

    useEffect(() => {
        http.getToken('/mypets')
            .then(data => {
                if (!data.success) console.log(data)
                if (data.success) setMyPets(data.pets)
            })
    }, []);

    return (
        <div className='container-fluid'>
            <div className='petList container d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <h2>My pets</h2>
                </div>
                <div className='row mx-1 mx-sm-0 w-100 pet-grid'>
                    {myPets && myPets.map(x => <PetCard key={x._id} pet={x}/>)}
                </div>
            </div>
        </div>

    );
};

export default MyPetPage;