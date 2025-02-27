import bgIndexTop from "../images/bgIndexTop.png"


const IndexPage = () => {


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

                        <p className='indexFirst-txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, facilis.</p>
                    </div>
                </div>

                <img className='d-md-none' src={bgIndexTop} alt=""/>

            </div>

            <div className='container-fluid indexSecond'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, porro.
            </div>


        </div>
    );
};

export default IndexPage;