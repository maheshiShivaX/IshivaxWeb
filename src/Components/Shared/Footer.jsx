import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="fw-main-row black-bg-content">
            <div className="fw-full-container" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                <div className="content-under-image">
                    <div className="fw-row ">
                        <img className="vector-line-1" src="./images/Vector-upper-arrow.png" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-container vector-class">
                            <div className="fw-col-md-4 footer_img_set">
                                <div className="dot-1"></div>
                                <div className="dot-2"></div>
                                <img className="vector-cross-1" src="./images/vector.png" />
                                <div className="dot-9"></div>
                                <div className="dot-10"></div>
                            </div>
                            <div className="fw-col-md-4">

                                <div className="group-3-ywq"> <img className="group-2-6oR"
                                    src="./images/ishivaxlogo.png" />

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


                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <aside id="text-2" className="widget widget_text">
                                    <div className="textwidget">
                                        <div className="footer-desc footer-col">
                                            <div className="logo lg-bottom">
                                                <h1 className="footer-h2">CONNECT WITH US-LET'S INNOVATE
                                                    TOGETHER.</h1>
                                            </div>
                                            <div className="footer-content">
                                                <Link to="/contact-us">
                                                    <div className="frame-66-4mL ">
                                                        <div className="portfolio-white">Get In Touch
                                                        </div>
                                                        <img className="arrow-right-ByH"
                                                            src="./images/arrow-right-white.png" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-6 col-lg-6 tech-quick">

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <aside id="nav_menu-2" className="widget widget_nav_menu">
                                        <h3 className="footer-widget-title">Technologies</h3>
                                        <div className="menu-footer-menu-container">
                                            <div id="menu-footer-menu" className="menu">
                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        Microsoft
                                                        Technologies
                                                    </p>
                                                </Link>

                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        Digital
                                                        Marketing
                                                    </p>
                                                </Link>
                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        CRMS/HRMS
                                                        Technologies
                                                    </p>
                                                </Link>
                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        Mobile App
                                                        Development
                                                    </p>
                                                </Link>

                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        High Fidelity
                                                        Design
                                                    </p>
                                                </Link>
                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        Web
                                                        Development
                                                    </p>
                                                </Link>

                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <aside id="nav_menu-3" className="widget widget_nav_menu">
                                        <h3 className="footer-widget-title">Quick Link</h3>
                                        <div className="menu-payment-container">
                                            <div id="menu-footer-menu" className="menu">
                                                <Link to="/">
                                                    <p className="footer-menu-item">
                                                        Home
                                                    </p>
                                                </Link>

                                                <Link to="/services">
                                                    <p className="footer-menu-item">
                                                        Services
                                                    </p>
                                                </Link>
                                                <Link to="/aboutus">
                                                    <p className="footer-menu-item">
                                                        About Us
                                                    </p>
                                                </Link>
                                                <Link to="/service-mobile-app">
                                                    <p className="footer-menu-item">
                                                        Development
                                                    </p>
                                                </Link>
                                                <Link to="/contact-us">
                                                    <p className="footer-menu-item">
                                                        Contact
                                                    </p>
                                                </Link>
                                                <Link to="/privacy-policy">
                                                    <p className="footer-menu-item">
                                                        Privacy Policy
                                                    </p>
                                                </Link>
                                                <Link to="/terms-conditions">
                                                    <p className="footer-menu-item">
                                                        Terms & Conditions
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </aside>
                                </div>


                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-6 ">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                                            <h3 className="footer-widget-title"></h3>
                                            <img className="frame-logo-image" src="./images/41.png" alt="" />
                                        </aside>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                                            <h3 className="footer-widget-title"></h3>
                                            <img className="frame-logo-image" src="./images/42.png" alt="" />
                                        </aside>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <aside id="nav_menu-2" className="widget widget_nav_menu">
                                            <h3 className="footer-widget-title"></h3>
                                            <img className="frame-logo-image" src="./images/43.png" alt="" />
                                        </aside>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 col-lg-6 tech-quick">

                                <div className="col-sm-12 col-md-6 col-lg-6">

                                    <aside id="nav_menu-2" className="widget widget_nav_menu">
                                        <h3 className="footer-widget-title"></h3>

                                        <img src="https://images.dmca.com/Badges/dmca-badge-w250-2x1-04.png?ID=3b5e8e2d-1356-4a0e-be12-d84f99496987"
                                            alt="DMCA.com Protection Status" className="footer_dmca" />

                                    </aside>






                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <aside id="nav_menu-2" className="widget widget_nav_menu">
                                        <h3 className="footer-widget-title">Follow Us</h3>
                                        <div className="menu-footer-menu-container">
                                            <div id="menu-footer-menu" className="menu">
                                                {/* <a href="https://dribbble.com/ishivax">
                                                <p className="footer-menu-item">

                                                    <img className="socialmedia-image"
                                                        src="./images/dribbble.svg" />
                                                    Dribbble

                                                </p>
                                            </a> */}
                                                <a href="https://www.linkedin.com/company/ishivax/">
                                                    <p className="footer-menu-item">
                                                        <img className="socialmedia-image"
                                                            src="./images/linkedin.svg" />LinkedIn
                                                    </p>
                                                </a>

                                                <a
                                                    href="https://www.instagram.com/ishivax_official?igsh=MTA0NWwyejhldDQ3eg==">
                                                    <p className="footer-menu-item">
                                                        <img className="socialmedia-image"
                                                            src="./images/instagram.svg" />Instagram

                                                    </p>
                                                </a>


                                                <a href="https://x.com/iShivaxllc">
                                                    <p className="footer-menu-item">
                                                        <img className="socialmedia-image"
                                                            src="./images/Frametwitter.svg" />Twitter
                                                    </p>
                                                </a>

                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                {/* <div className="col-sm-12 col-md-6 col-lg-6">
                                    <aside id="nav_menu-2" className="widget widget_nav_menu">
                                        <h3 className="footer-widget-title">Follow Us</h3>
                                        <div className="menu-footer-menu-container">
                                            <div id="menu-footer-menu" className="menu">
                                                 <a href="https://dribbble.com/ishivax">
                                                <p className="footer-menu-item">

                                                    <img className="socialmedia-image"
                                                        src="./images/dribbble.svg" />
                                                    Dribbble

                                                </p>
                                            </a>
                                                <a href="https://www.linkedin.com/company/ishivax/">
                                                    <p className="footer-menu-item">
                                                        <img className="socialmedia-image"
                                                            src="./images/linkedin.svg" />LinkedIn
                                                    </p>
                                                </a>

                                                <a
                                                    href="https://www.instagram.com/ishivax_official?igsh=MTA0NWwyejhldDQ3eg==">
                                                    <p className="footer-menu-item">
                                                        <img className="socialmedia-image"
                                                            src="./images/instagram.svg" />Instagram

                                                    </p>
                                                </a>


                                                <a href="https://x.com/iShivaxllc">
                                                    <p className="footer-menu-item">
                                                        <img className="socialmedia-image"
                                                            src="./images/Frametwitter.svg" />Twitter
                                                    </p>
                                                </a>

                                            </div>
                                        </div>
                                    </aside>
                                </div> */}
                            </div>

                        </div>

                    </div>



                    <div className="fw-row ">
                        <img className="vector-line-1" src="./images/Vector-upper-arrow.png"
                            style={{ marginTop: '10px' }} />
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
                                <p className="footer-copyright">Copyright © 2024 iShivax®</p>
                            </div>
                            <div className="fw-col-md-4 vector-class">
                                <div className="dot-5"></div>
                                <div className="dot-6"></div>
                                <img className="vector-cross-2" src="./images/vector.png" />
                                <div className="dot-7"></div>
                                <div className="dot-8"></div>
                            </div>
                        </div>
                    </div>
                    <div className="fw-row">
                        <img className="vector-line-2" src="./images/Vector-upper-arrow.png" />
                    </div>
                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">
                            <div className="fw-divider-space" style={{ marginTop: '10px' }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;