import { Link, NavLink } from "react-router-dom";

const OurEminentSolutions = () => {
    return (
        <div>
            <div className="fw-main-row middle-content" style={{backgroundColor:'f1f1f1'}}>
                <div className="fw-row sliding-text">
                    <p className="p-sliding-text">Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                        Your Trusted IT partner.
                    </p>
                </div>
                <div className="fw-container">
                    {/* <!-- <div className="fw-row">
                                        <div className="component-7-67q">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                                    </div> --> */}

                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-heading fw-heading-h2">
                                <h2 className='fw-special-title'>OUR EMINENT SOLUTIONS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <p className="exciting-ER4">At iShivax, we devise creative strategies and
                                innovative approaches to propel our clients' businesses forward,
                                transforming challenges into opportunities with tailored solutions that
                                exceed expectations.</p>
                        </div>
                    </div>
                    <div className="fw-row">
                        <Link to='/services'>
                            <div className="frame-66-Y1q frame-solutions-button">
                                <div className="frame-66-Y1q-text">View All Solutions</div>
                                <div className="frame-66-Y1q-arrow"></div>
                            </div>
                        </Link>
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{marginTop:'60px'}}></div>
                        </div>
                    </div>
                    <div className="fw-row card-container">
                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4 ">

                            <Link to="/service-mobile-app">
                                <div className="frame-7-XAX">
                                    <p className="mobile-app-development-2sy">Web & App Excellence</p>

                                    <div>
                                        <p className="card-text-AA1">We blend creative design with robust
                                            development to elevate your online presence.</p>
                                        {/* <!-- <div className="frame-8056-aHD">
                                                            <div className="frame-66-WRm">React Native</div>
                                                            <div className="frame-67-AWK">Flutter</div>
                                                        </div> --> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4">
                            <div className="frame-8-XAX">
                                <p className="mobile-app-development-2sy">Design & Marketing Mastery</p>
                                <div>
                                    <p className="card-text-AA1">Mastering design and marketing for your
                                        brand's success.</p>
                                    {/* <!-- <div className="frame-8056-aHD">
                                                        <div className="frame-66-WRm">React Native</div>
                                                        <div className="frame-67-AWK">Flutter</div>
                                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4">
                            <div className="frame-9-XAX">
                                <p className="mobile-app-development-2sy">IoT & Automation Solutions</p>
                                <div>
                                    <p className="card-text-AA1">Elevate efficiency and innovation through
                                        IoT and automation solutions.</p>
                                    {/* <!-- <div className="frame-8056-aHD">
                                                        <div className="frame-66-WRm">React Native</div>
                                                        <div className="frame-67-AWK">Flutter</div>
                                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default OurEminentSolutions;