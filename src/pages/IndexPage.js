import {useEffect, useState} from 'react';
import pethea from '../images/pethea.png'


const IndexPage = () => {

    const [images, setImages] = useState(null);
    const [isHovered, setHovered] = useState(null);

    useEffect(() => {
        fetch('http://localhost:2001/gallery')
            .then(res => res.json())
            .then(data => {
                if(data.success) setImages(data.images)
            })
    }, [])


    return (
        <div className='mx-2'>
            <div className='gallery row mx-1 mx-sm-0'>
                {images && images.map(x =>
                    <div key={x._id}
                    className={`rounded-2 pad2 col-12 col-sm-6 col-md-4 col-xl-3 ${isHovered === x._id? "active" : ""}`}
                    onMouseEnter={() => setHovered(x._id)}
                    onMouseLeave={() => setHovered(null)}>
                        <img className='gallery-img rounded-2' src={x.image} alt={x._id}/>
                        <div className='gallery-img-logo position-absolute d-flex align-items-center justify-content-center'>
                            <img src={pethea} alt="pethea"/>
                        </div>

                    </div>)}
            </div>
        </div>
    );
};

export default IndexPage;