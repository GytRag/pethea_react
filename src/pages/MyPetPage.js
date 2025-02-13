import React, {useEffect, useState} from 'react';
import PetCard from "../components/PetCard";

const MyPetPage = () => {


    const [myPets, setMyPets] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            authorization: localStorage.getItem('token'),
        }
    }


    useEffect(() => {
        fetch('http://localhost:2001/mypets', options)
            .then(res => res.json())
            .then(data => {
                if (!data.success) console.log(data)
                if (data.success) setMyPets(data.pets)
            })
    }, []);


    return (
        <div className='petList container d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-between align-items-center w-100'>
                <h2>My pets</h2>
            </div>
            <div className='row mx-1 mx-sm-0 w-100 pet-grid'>
                {myPets && myPets.map(x => <PetCard key={x._id} pet={x}/>)}
            </div>
        </div>
    );
};

export default MyPetPage;