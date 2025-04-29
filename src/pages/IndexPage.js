import bgIndexTop from "../images/bgIndexTop.png"
import CarouselComp from "../components/CarouselComp";
import {useEffect, useState} from "react";
import http from "../plugin/https";
import ProductCard from "../cards/productCardComponents/ProductCard";


const IndexPage = () => {

    const [doctors, setDoctors] = useState(null);
    const [products, setProducts] = useState(null);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        http.get('/home')
            .then(data => {
                if (!data.success) console.log(data)
                if (data.success) {
                    setDoctors(data.doctors)
                    const productsArr = [];
                    if(screenWidth >= 375 && screenWidth < 576) {
                        for (let i = 0; i < 2; i++) {productsArr.push(data.products[i])}
                        setProducts(productsArr)
                    }
                    if(screenWidth >= 576 && screenWidth < 768) {
                        for (let i = 0; i < 3; i++) {productsArr.push(data.products[i])}
                        setProducts(productsArr)
                    }
                    if(screenWidth >= 768 && screenWidth < 992) {
                        for (let i = 0; i < 4; i++) {productsArr.push(data.products[i])}
                        setProducts(productsArr)
                    }
                    if(screenWidth >= 992) {
                        for (let i = 0; i < 5; i++) {productsArr.push(data.products[i])}
                        setProducts(productsArr)
                    }
                }
            })
    }, [])

    useEffect(() => {
        const logScreenSize = () => {
            // console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
            setScreenWidth(window.innerWidth);
        };
        // Log initial size
        logScreenSize();
        // Log on resize
        window.addEventListener('resize', logScreenSize);
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', logScreenSize);
        };
    }, []);



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

                {!doctors && <div className='d-flex justify-content-center'>
                    <div className='loader'></div>
                </div>}

                {doctors && <div className="container-xxl mb-5">
                    <CarouselComp doctors={doctors}/>
                </div>}


            </div>

            {/*Pet Health Products*/}
            <div className='container-fluid indexThird pt-0'>

                <div className='container-xxl d-flex flex-column align-items-center'>
                    <div className='text-center mb-5'>
                        <h1>Pet Health Products</h1>
                    </div>

                    {!products && <div>
                        <div className='loader'></div>
                    </div>}

                    {products && <div className='d-flex gap-3'>
                        {products.map((x, i) => <ProductCard item={x} key={i}/>)}
                    </div>}
                </div>

            </div>

            {/*maby happy clients here*/}
            <div className='container-fluid indexFourth'>
                <p>More content later...</p>
            </div>

        </div>
    );
};

export default IndexPage;
