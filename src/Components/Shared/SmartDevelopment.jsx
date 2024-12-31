import { Link } from 'react-router-dom';
import '../CustomCss/Custom.css';
import { useEffect, useState } from 'react';
import { imagebaseurl } from '../../config';
import { GetImageDetailByImageType } from '../../_services';
const SmartDevelopment = () => {



    const [imageData, setImageData] = useState();

    

    const fetchgetImageDetailByImageType = async () => {
        try {
            const data = await GetImageDetailByImageType('SmartDevelopement');
            setImageData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    useEffect(() => {
       fetchgetImageDetailByImageType();

    },[])


    return (

            <div className="fw-main-row black-bg-content">
                <div className="fw-full-container">
                    <div className="fw-container">

                        <div className="seo-media-images">
                        {imageData?.map((item, i) => (
                           
                            <img key={i} className="top-image"  src={`${imagebaseurl}${item?.imagePath}`}  />
                        ))}
                        </div>
                    </div>
                    <div className="content-under-image">
                        <div className="fw-row ">
                            <img className="vector-line-1" src="./images/Vector-upper-arrow.png" />
                        </div>
                        <div className="fw-row">
                            <div className="fw-container">
                                <div className="fw-col-md-4 vector-class">
                                    <div className="dot-1"></div>
                                    <div className="dot-2"></div>
                                    <img className="vector-cross-1" src="./images/vector.png" />
                                    <div className="dot-3"></div>
                                    <div className="dot-4"></div>
                                </div>
                                <div className="fw-col-md-4">
                                    <div className="fw-heading fw-heading-h2">
                                        <h2 className='fw-special-title vector-heading'>SMART
                                            DEVELOPMENT
                                        </h2>
                                    </div>
                                </div>
                                <div className="fw-col-md-4  vector-class">
                                    <div className="dot-5"></div>
                                    <div className="dot-6"></div>
                                    <img className="vector-cross-2" src="./images/vector.png" />
                                    <div className="dot-7"></div>
                                    <div className="dot-8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="fw-row ">
                            <img className="vector-line-2" src="./images/Vector-upper-arrow.png" />
                        </div>
                        <div className="fw-row">
                            <div className="fw-row sliding-text">
                                <p className="p-sliding-text-black">Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                    Your Trusted IT partner.
                                </p>
                            </div>
                        </div>
                        <div className="fw-row ">
                            <img className="vector-line-2" src="./images/Vector-upper-arrow.png" />
                        </div>
                        <div className="fw-row vector-class">

                            <div className="fw-container">

                                <div className="fw-col-md-4">

                                    <div className="dot-1"></div>
                                    <div className="dot-2"></div>
                                    <img className="vector-cross-1" src="./images/vector.png" />
                                    <div className="dot-9"></div>
                                    <div className="dot-10"></div>
                                </div>
                                <div className="fw-col-md-4">
                                </div>
                                <div className="fw-col-md-4">
                                    <div className="dot-5"></div>
                                    <div className="dot-6"></div>
                                    <img className="vector-cross-2" src="./images/vector.png" />
                                    <div className="dot-11"></div>
                                    <div className="dot-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <img className="vector-line-2" src="./images/Vector-upper-arrow.png" />
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space-manual"></div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-container">
                                <div className="fw-col-xs-12 fw-col-sm-12 fw-col-md-3 fw-col-lg-3">
                                    <p className="exciting-ER5">At iShivax, we blend dedication and
                                        innovation to transform your business, treating it as both a
                                        science and an art.</p>
                                </div>
                                <div className="fw-col-xs-12  fw-col-md-1 fw-col-lg-3">

                                </div>
                                <Link to="/portfolio">
                                    <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 fw-col-lg-3">
                                        <div className="frame-66-4mJ">
                                            <div className="portfolio-white">Check Our Portfolio</div>
                                            <img className="arrow-right-ByH"
                                                src="./images/arrow-right-white.png" />
                                        </div>
                                    </div>

                                </Link>
                                <Link to="/contact-us">
                                    <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 fw-col-lg-3">
                                        <div className="frame-66-4mL ">
                                            <div className="portfolio-white">Get In Touch</div>
                                            <img className="arrow-right-ByH"
                                                src="./images/arrow-right-white.png" />
                                        </div>
                                    </div>

                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}
export default SmartDevelopment 