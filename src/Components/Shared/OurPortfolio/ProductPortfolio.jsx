import { useEffect, useState } from "react";
import Header from "../Header";

import '../OurPortfolio/Portfolio.css';
import { getPortfolioType, GetProjectDetailAll } from "../../../_services";
import { imagebaseurl } from "../../../config";
import { Link } from "react-router-dom";

const ProductPortfolio = () => {



    const [projectData, setProjectData] = useState();
    const [filterProjectData, setFilterProjectData] = useState();
    const [portfolioData, setPortfolioData] = useState();


    const fetchGetProjectDetail = async () => {
        try {
            const data = await GetProjectDetailAll();
            setProjectData(data);
            setFilterProjectData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };
    const fetchgetPortfolioType = async () => {
        try {
            const data = await getPortfolioType();
            setPortfolioData(data);

            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };


    const onChangePortfolio = async (id) => {
        try {


            const data = projectData.filter(x => id == 0 ? 1 == 1 : x.portfolioTypeId == id);

            setFilterProjectData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    // const onChangePortfolio =  projectData.filter(x=>x.portfolioTypeId==id);

    useEffect(() => {
        //  const filter=   projectData.filter(x=>x.portfolioTypeId==)

    }, [])


    useEffect(() => {
        fetchGetProjectDetail();
        fetchgetPortfolioType();

    }, [])





    return (
        <div>
            <Header />
            <section>
                <div className="fw-main-row black-bg-content">
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>

                        <div className="content-under-image">

                            <div className="fw-row ">
                                <img className="vector-line-1" src="./images/Vector-upper-arrow.png" />
                            </div>

                            <div className="fw-row">
                                <div className="fw-container ">
                                    <div className="fw-col-md-4 vector-class">
                                        <div className="dot-1"></div>
                                        <div className="dot-2"></div>
                                        <img className="vector-cross-1" src="./images/vector.png" />
                                        <div className="dot-3"></div>
                                        <div className="dot-4"></div>
                                    </div>

                                    <div className="fw-col-md-4">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className='fw-special-title vector-heading'>OUR PORTFOLIO
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

                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                </div>
                            </div>
                            <div className="fw-row">
                                <div className="container">
                                    <div className="fw-col-xs-12 ">

                                    </div>
                                    <div className="fw-col-xs-12 ">
                                        <p className="heading-common-main">Discover 200+ Projects that I made With Love</p>
                                        <p className="heading-common-content">What we’re good at building apps & Website that are used by millions of people and platforms that serve thousands of <br /> businesses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space" style={{ marginTop: '50px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="Portfolio_New_Page_wepper">
                <div className="container">
                    <div className="hedding_Portfolio_New">
                        <h2>A Deep Dive into Our Consulting Case Studies</h2>
                        <p>Our agency help businesses develop strategic plans to define their long-term goals, objectives, and the actions needed to achieve them.</p>
                    </div>
                    <nav className="portfolio_tab_wepper">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#AllPortfolio" type="button" role="tab" aria-controls="nav-home" onClick={() => onChangePortfolio(0)} aria-selected="true">All Portfolio</button>
                            {portfolioData?.map((item, i) => (
                                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#AllPortfolio" type="button" role="tab" aria-controls="nav-home" onClick={() => onChangePortfolio(item.portfolioTypeId)} aria-selected="true">{item.portfolioTypeName}</button>
                            ))}


                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="AllPortfolio" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">



                            {filterProjectData?.map((item, i) => (
                                <>
                                    {i % 2 === 0 ?

                                        <div className="row">
                                            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                                <div className="portfolio_inner_hedding">
                                                    <h3>{item.projectName}</h3>
                                                    <span>{item.projectType}</span>
                                                    <div className="portfolio_inner_content">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <div className="portflio_line_line">


                                                    <Link target="_blank" to={item.liveUrl}>
                                                        <div className="frame-port-004">
                                                            <div className="arrow-sign">&#8594;</div>
                                                        </div>
                                                    </Link>


                                                    <div className="frame-port-001">


                                                        {item.iosurl != null ?
                                                            <Link target="_blank" to={item.iosurl}>
                                                                <div className="frame-port-002">iPhone</div>
                                                            </Link> : null
                                                        }

                                                        {item.androidUrl != null ?
                                                            <Link target="_blank" to={item.androidUrl}>
                                                                <div className="frame-port-002">Android</div>
                                                            </Link> : null
                                                        }


                                                        {item.liveUrl != null ?
                                                            <Link target="_blank" to={item.liveUrl}>
                                                                <div className="frame-port-002">Website</div>
                                                            </Link> : null
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="portfolio_inner_image_data">
                                                
                                                    <img src={`${imagebaseurl}${item?.projectPath}`} />

                                                </div>
                                            </div>

                                        </div>


                                        :
                                        <div className="row row_spaceing">

                                            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="portfolio_inner_image_data left_img">
                                                    <img src={`${imagebaseurl}${item?.projectPath}`} />

                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                                <div className="portfolio_inner_hedding">
                                                    <h3>{item.projectName}</h3>
                                                    <span>{item.projectType}</span>
                                                    <div className="portfolio_inner_content">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <div className="portflio_line_line">


                                                    <Link target="_blank" to={item.liveUrl}>
                                                        <div className="frame-port-004">
                                                            <div className="arrow-sign">&#8594;</div>
                                                        </div>
                                                    </Link>


                                                    <div className="frame-port-001">


                                                        {item.iosurl != null ?
                                                            <Link target="_blank" to={item.iosurl}>
                                                                <div className="frame-port-002">iPhone</div>
                                                            </Link> : null
                                                        }

                                                        {item.androidUrl != null ?
                                                            <Link target="_blank" to={item.androidUrl}>
                                                                <div className="frame-port-002">Android</div>
                                                            </Link> : null
                                                        }


                                                        {item.liveUrl != null ?
                                                            <Link target="_blank" to={item.liveUrl}>
                                                                <div className="frame-port-002">Website</div>
                                                            </Link> : null
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                        </div>}







                                </>
                            ))}

                        </div>





                    </div>
                </div>
            </section> */}


            <section className="Portfolio_New_Page_wepper">
                <div className="container">
                    <div className="hedding_Portfolio_New">
                        <h2 className="exciting-ER4">A Deep Dive into Our Consulting Case Studies</h2>
                        <p className="portfolio-our-agency">Our agency help businesses develop strategic plans to define their long-term goals, objectives, and the actions needed to achieve them.</p>
                    </div>
                    <nav className="portfolio_tab_wepper">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#AllPortfolio" type="button" role="tab" aria-controls="nav-home" onClick={() => onChangePortfolio(0)} aria-selected="true">All Portfolio</button>
                            {portfolioData?.map((item, i) => (
                                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#AllPortfolio" type="button" role="tab" aria-controls="nav-home" onClick={() => onChangePortfolio(item.portfolioTypeId)} aria-selected="true">{item.portfolioTypeName}</button>
                            ))}


                            {/* <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#AllPortfolio" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Portfolio</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#Business" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Business</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Economy" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Economy</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Finance" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Finance</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Marketing" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Marketing</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Technology" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Technology</button> */}

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="AllPortfolio" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">


                            {filterProjectData?.map((item, i) => (
                                <>
                                    {i % 2 === 0 ?

                                        <div className="fw-row row_flex_drirecston">
                                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 position-relative">
                                                <div className="portfolio_inner_hedding">
                                                    <h3 className="portfolio-content-title">{item.projectName}</h3>
                                                    <span>{item.projectType}</span>
                                                    <div className="portfolio_inner_content">
                                                        <p className="portfolio-our-agency">{item.description}</p>

                                                    </div>
                                                </div>
                                                <div className="portflio_line_line_weepper">
                                                    <div className="portflio_line_line height_set">
                                                        {/* <a href="https://www.firstindiaplus.com">
                                                            <div className="frame-port-004">
                                                                <div className="arrow-sign">→</div>
                                                            </div>
                                                        </a> */}
                                                        <Link target="_blank" to={item.liveUrl}>
                                                        <div className="frame-port-004">
                                                            <div className="arrow-sign">&#8594;</div>
                                                        </div>
                                                    </Link>

                                                        <div className="frame-port-001">
                                                        {item.iosurl != null ?
                                                            <Link target="_blank" to={item.iosurl}>
                                                                <div className="frame-port-002">iPhone</div>
                                                            </Link> : null
                                                        }

                                                        {item.androidUrl != null ?
                                                            <Link target="_blank" to={item.androidUrl}>
                                                                <div className="frame-port-002">Android</div>
                                                            </Link> : null
                                                        }


                                                        {item.liveUrl != null ?
                                                            <Link target="_blank" to={item.liveUrl}>
                                                                <div className="frame-port-002">Website</div>
                                                            </Link> : null
                                                        }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6">
                                                <div className="portfolio_inner_image_data">
                                                    <img src="./images/1st-india.jpg" alt="" className="frame-1-6" />

                                                </div>
                                            </div>

                                        </div>

                                        :
                                        <div className="fw-row row_spaceing">

                                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6">
                                                <div className="portfolio_inner_image_data left_img">
                                                    <img src="./images/Aagaman-pot.png" alt="" className="frame-1-6" />

                                                </div>
                                            </div>
                                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6 position-relative">
                                                <div className="portfolio_inner_hedding">
                                                <h3 className="portfolio-content-title">{item.projectName}</h3>
                                                    <span>{item.projectType}</span>
                                                    <div className="portfolio_inner_content">
                                                        <p className="portfolio-our-agency">{item.description}</p>

                                                    </div>
                                                </div>
                                                <div className="portflio_line_line_weepper">
                                                    <div className="portflio_line_line">
                                                    <Link target="_blank" to={item.liveUrl}>
                                                        <div className="frame-port-004">
                                                            <div className="arrow-sign">&#8594;</div>
                                                        </div>
                                                    </Link>
                                                        <div className="frame-port-001">
                                                        {item.iosurl != null ?
                                                            <Link target="_blank" to={item.iosurl}>
                                                                <div className="frame-port-002">iPhone</div>
                                                            </Link> : null
                                                        }

                                                        {item.androidUrl != null ?
                                                            <Link target="_blank" to={item.androidUrl}>
                                                                <div className="frame-port-002">Android</div>
                                                            </Link> : null
                                                        }


                                                        {item.liveUrl != null ?
                                                            <Link target="_blank" to={item.liveUrl}>
                                                                <div className="frame-port-002">Website</div>
                                                            </Link> : null
                                                        }

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>}


                                </>
                            ))}


                        </div>
                        <div className="tab-pane fade" id="Business" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">Business</div>
                        <div className="tab-pane fade" id="Economy" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Economy</div>
                        <div className="tab-pane fade" id="Finance" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Finance</div>
                        <div className="tab-pane fade" id="Marketing" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Marketing</div>
                        <div className="tab-pane fade" id="Technology" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">Technology</div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductPortfolio;