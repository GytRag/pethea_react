import bgIndexTop from "../images/bgIndexTop.png"
import CarouselComp from "../components/CarouselComp";
import {useEffect, useState} from "react";
import http from "../plugin/https";


const IndexPage = () => {

    const [doctors, setDoctors] = useState(null);

    useEffect(() => {
        http.get('/alldoctors')
            .then(data => {
                if (!data.success) console.log(data)
                if (data.success) setDoctors(data.doctors)
            })
    }, [])


    return (
        <div>
            <div className=''>

            </div>
            <div className='container-fluid indexFirst'>

                <div className='container-xxl'>
                    <div className='indexFirst-about'>
                        <h1>Preventive Veterinary Care</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam eveniet facere
                            facilis
                            in
                            ipsa labore magnam maiores minus, nam obcaecati possimus praesentium quod rem sed
                            temporibus.
                            Modi,
                            nostrum.</p>

                        <p className='indexFirst-txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus, facilis.</p>
                    </div>
                </div>

                <img className='d-md-none' src={bgIndexTop} alt=""/>

            </div>

            <div className='container-fluid indexSecond'>


                <div className="indexSecond-about container-xxl d-flex flex-column align-items-center text-center mb-5">
                    <h1>Specialist Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ea eos facere
                        molestias nostrum quod sequi, sunt tempora temporibus.</p>
                </div>

                <div className="container-xxl mb-5">
                    <CarouselComp doctors={doctors}/>
                </div>


            </div>

            {/*maby pet shop here*/}
            <div className='container-fluid indexThird'>
                Here will be the content later..
            </div>

            {/*maby happy clients here*/}
            <div className='container-fluid indexFourth'>

            </div>

        </div>
    );
};

export default IndexPage;