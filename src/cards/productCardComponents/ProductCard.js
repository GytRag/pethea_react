import React, {useState} from 'react';
import StarSvg from "./StarSvg";

const ProductCard = ({item}) => {

    const [stars, setStars] = useState(null);

    if(!stars) {
        const starsArr = [];
        for (let i = 0; i < 5; i++) {
            if(i < item.stars) {
                starsArr.push(true)
            } else {starsArr.push(false)}
        }
        setStars(starsArr);
    }


    return (

        <div className="productCard shadow position-relative p-3 rounded-3 d-flex flex-column justify-content-between">
            <div>
                <div className="bg-light-blue position-absolute w-100 h100"></div>
                <div className="position-relative w-100 d-flex justify-content-center">
                    <img src={item.image} alt=""/>
                    {/*product card svg when hover*/}
                    <div className="productCard-svg d-flex gap-2 justify-content-center w-100">
                        <div className="bg-green rounded-circle cursor-point svgView position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-binoculars" viewBox="0 0 16 16">
                                <path
                                    d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                            <div className="position-absolute to-view opacity-0"><span
                                className="bg-green px-2 py-1 text-white rounded-pill text-nowrap">View</span>
                            </div>
                        </div>

                        <div className="bg-green rounded-circle cursor-point svgFavorite position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                            <div className="position-absolute to-favorite opacity-0"><span
                                className="bg-green px-2 py-1 text-white rounded-pill text-nowrap">Favorite</span>
                            </div>
                        </div>

                        <div className="bg-green rounded-circle cursor-point svgStore position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                                <path d="M3 21l18 0"></path>
                                <path
                                    d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                                <path d="M5 21l0 -10.15"></path>
                                <path d="M19 21l0 -10.15"></path>
                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                            </svg>
                            <div className="position-absolute to-store opacity-0"><span
                                className="bg-green px-2 py-1 text-white rounded-pill text-nowrap">Store</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fs-5 fw-bolder">{item.title}</div>
            </div>

            <div>
                {/*How many stars product have*/}
                <div className="svg-star d-flex my-3 gap-1">
                    {stars && stars.map((x, i) =>
                        <div key={i}>
                            {x && <StarSvg isTrue={true}/>}
                            {!x && <StarSvg isTrue={false}/>}
                        </div>)}
                </div>
                {/*Price and cart*/}
                <div className="d-flex justify-content-between align-items-end">
                    <div className="fs-5 fw-bolder">${item.price}</div>
                    <div className="position-relative">
                        <div className="bg-green rounded-circle text-white svgAdd">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-bag m-2" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        </div>
                        <div className="position-absolute to-card"><span
                            className="bg-green px-2 py-1 text-white rounded-pill text-nowrap">Add To Card</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;