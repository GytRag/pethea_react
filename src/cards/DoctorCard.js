import React from 'react';

const DoctorCard = ({item, slideIndex, index}) => {




    return (
        <div style={{scale: slideIndex === index? "1.2":""}}
            className='doctorCard p-2 rounded-2 mx-3'>
           <div><img src={item.image} alt=""/></div>
           <div>Dr. {item.name}</div>
        </div>
    );
};

export default DoctorCard;