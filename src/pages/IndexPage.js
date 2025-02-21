import bgIndexTop from "../images/bgIndexTop.png"


const IndexPage = () => {


    return (
        <div>
            <div className=''>

            </div>
            <div className='container-fluid indexTop'>
                
                <div className='container-xxl'>
                    <div className='indexTop-about'>
                        <h1>Preventive Veterinary Care</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam eveniet facere
                            facilis
                            in
                            ipsa labore magnam maiores minus, nam obcaecati possimus praesentium quod rem sed
                            temporibus.
                            Modi,
                            nostrum.</p>

                        <p className='indexTop-txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, facilis.</p>
                    </div>
                </div>

                <img className='d-md-none' src={bgIndexTop} alt=""/>
                
            </div>


        </div>
    );
};

export default IndexPage;