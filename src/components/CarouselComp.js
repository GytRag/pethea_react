import DoctorCard from "../cards/DoctorCard";
import {useEffect, useState} from "react";


const CarouselComp = ({doctors}) => {

    const [allDoctors, setAllDoctors] = useState(null);
    const [slideIndex, setSlideIndex] = useState(1);

    if(doctors && !allDoctors) setAllDoctors(doctors)

    // Next/previous doctor cards
    function currentSlide(n) {
        if(allDoctors && allDoctors.length > 1) {
            let topSlide = []
            if(n === -1){
                for (let i = allDoctors.length - 1; i >= 0; i--) {
                    if(i !== 0) topSlide.unshift(allDoctors[i])
                    if(i === 0) topSlide.push(allDoctors[i])
                }
                setAllDoctors(topSlide)
            }
            if(n === 1){
                for (let i = 0; i < allDoctors.length; i++) {
                    if(i === allDoctors.length -1) topSlide.unshift(allDoctors[i])
                    if(i !== allDoctors.length -1) topSlide.push(allDoctors[i])
                }
                setAllDoctors(topSlide)
            }
        }
    }






    return (
        <div className='d-flex flex-column align-items-center gap-1'>

            <div className='d-flex justify-content-center align-items-center'>
                <div onClick={() => currentSlide(-1)}>&#10094;</div>

                <div>
                    <div className='d-none container d-md-flex justify-content-center'>
                        {allDoctors && allDoctors.map((x, i) =>
                            <div key={x._id}>
                                {i < 3 && <DoctorCard item={x} index={i} slideIndex={slideIndex} />}
                            </div>)}
                    </div>

                    <div className='d-none container d-sm-flex d-md-none justify-content-center'>
                        {allDoctors && allDoctors.map((x, i) =>
                            <div key={x._id}>
                                {i < 2 && <DoctorCard item={x} index={i} slideIndex={slideIndex} />}
                            </div>)}
                    </div>

                    <div className='d-flex container d-sm-none justify-content-center'>
                        {allDoctors && allDoctors.map((x, i) =>
                            <div key={x._id}>
                                {i < 1 && <DoctorCard item={x} index={i} slideIndex={slideIndex} />}
                            </div>)}
                    </div>

                </div>

                <div onClick={() => currentSlide(1)}>&#10095;</div>
            </div>


        </div>

    );
};

export default CarouselComp;