import React, {useEffect, useState} from 'react';
import pethea from '../images/pethea.png'
import http from '../plugin/https'


const GalleryPage = () => {

    const [images, setImages] = useState(null);
    const [isHovered, setHovered] = useState(null);

    useEffect(() => {
        http.get('http://localhost:2001/gallery')
            .then(data => {
                if(data.success) setImages(data.images)
            })
    }, [])


    return (

        <div className='container-fluid'>
            <div className='container d-flex flex-column align-items-center'>

                <div className='d-flex justify-content-between align-items-center w-100'>
                    <h2 className=''>Our Happy Clients</h2>
                </div>

                <div className='gallery row mx-1 mx-sm-0'>
                    {images && images.map(x =>
                        <div key={x._id}
                             className={`gallery-div rounded-2 pad2 col-12 col-sm-6 col-md-4 col-xl-3 ${isHovered === x._id ? "active" : ""}`}
                             onMouseEnter={() => setHovered(x._id)}
                             onMouseLeave={() => setHovered(null)}>
                            <img className='gallery-img rounded-2' src={x.image} alt={x._id}/>
                            <div
                                className='gallery-img-logo position-absolute d-flex align-items-center justify-content-center'>
                                <img src={pethea} alt="pethea"/>
                            </div>

                        </div>)}
                </div>
            </div>
        </div>

    );
};

export default GalleryPage;