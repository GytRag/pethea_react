import React from 'react';

const LogPresCard = ({item}) => {


    return (
        <div className='pad2 text-center'>
            <div className='borderBlue rounded-2 p-2'>
                <h5>{item.description}</h5>
                <small>{item.date}</small>
            </div>
        </div>
    );
};

export default LogPresCard;