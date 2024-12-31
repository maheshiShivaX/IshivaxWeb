import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { getProjectDetail } from "../../_services";
import { imagebaseurl } from "../../config";







const OurPortfolio = () => {
    const [projectData, setProjectData] = useState();

    

    const fetchGetProjectDetail = async () => {
        try {
            const data = await getProjectDetail();
            setProjectData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    useEffect(() => {
        fetchGetProjectDetail();


    }, [])



    return (
        <div className="fw-main-row middle-content">
            <div className="fw-container">
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                    </div>
                </div>



                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className='fw-special-title' style={{ textAlign: 'center' }}>OUR
                                PORTFOLIO</h2>
                        </div>
                    </div>
                </div>
                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <p className="exciting-ER4" style={{ textAlign: 'center' }}>By focusing on the user,
                            our designs promote productivity<br /> and catalyze revenue enhancement
                        </p>
                    </div>

                </div>




                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                    </div>
                </div>

                <div className="fw-row">


                {projectData?.map((item, i) => (
                    <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6" key={i}>
                        <div className="seo-media-images frame-1-6">
                            <img src={`${imagebaseurl}${item?.projectPath}`} style={{ borderRadius: '20px' }} />
                        </div>
                        <p className="portfolio-content-title">{item.projectName}</p>
                        <p className="portfolio-content-line">{item.projectType}</p>
                        <Link target="_blank"  to={item.liveUrl}>
                            <div className="frame-port-004">
                                <div className="arrow-sign">&#8594;</div>
                            </div>
                            </Link>

                        <div className="frame-port-001">

                        {item.iosurl != null  ? 
                            <Link target="_blank" to={item.iosurl}>
                            <div className="frame-port-002">iPhone</div>
                        </Link> : null
                            }

{item.androidUrl != null  ? 
                            <Link target="_blank" to={item.androidUrl}>
                            <div className="frame-port-002">Android</div>
                        </Link> : null
                            }


                            {item.liveUrl != null  ? 
                            <Link target="_blank" to={item.liveUrl}>
                            <div className="frame-port-002">Website</div>
                        </Link> : null
                            }
                            

                        </div>


                    </div>
))}


                    

                </div>





{/* 
                <div className="fw-row">
                    <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 ">
                        <div className="seo-media-images frame-2-6">
                            <img src="./images/portfolio-1stindia.png"
                          style={{borderRadius:'20px'}} />
                        </div>
                        <p className="portfolio-content-title">1st India+ Entertainment</p>
                        <p className="portfolio-content-line">OTT, Live TV, Movies</p>
                        <a href="https://www.firstindiaplus.com">
                            <div className="frame-port-004">
                                <div className="arrow-sign">&#8594;</div>
                            </div>
                        </a>

                        <div className="frame-port-001">
                            <a href="https://apps.apple.com/in/app/first-india-plus/id6478978812 ">
                                <div className="frame-port-002">iPhone</div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.firstindia.ott&hl=en_IN&gl=US">
                                <div className="frame-port-002">Android</div>
                            </a>
                            <a href="https://www.firstindiaplus.com">
                                <div className="frame-port-003">Website</div>
                            </a>

                        </div>
                    </div>



                    <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 ">
                        <div className="seo-media-images frame-2-6">
                            <img src="./images/Component 54Lifecode.png"
                               style={{borderRadius:'20px'}}/>
                        </div>
                        <p className="portfolio-content-title">LifeCode Simplifies Emergency</p>
                        <p className="portfolio-content-line">Parking, Create QR</p>
                        <a href="https://www.lifecode.co.in">
                            <div className="frame-port-004">
                                <div className="arrow-sign">&#8594;</div>
                            </div>
                        </a>

                        <div className="frame-port-001">
                            <a
                                href="https://apps.apple.com/in/app/lifecode-simplifies-emergency/id1546741259">
                                <div className="frame-port-002">iPhone</div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.ishivax.lifecode">
                                <div className="frame-port-002">Android</div>
                            </a>

                            <a href="https://www.lifecode.co.in">
                                <div className="frame-port-003">Website</div>
                            </a>

                        </div>
                    </div>
                </div> */}



                <div className="fw-row">
                    <Link to="/portfolioD">
                        <div className="frame-66-Y1q frame-portfolio-button">
                            <div className="frame-66-Y1q-text">View All Portfolio</div>
                            <div className="frame-66-Y1q-arrow"></div>
                        </div>
                    </Link>


                </div>

            </div>
        </div>
    )
}

export default OurPortfolio;
