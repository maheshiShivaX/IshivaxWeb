import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const togglePopup = () => {
        if (isPopupOpen) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setIsPopupOpen(false);
            }, 300); // Animation duration in milliseconds
        } else {
            setIsPopupOpen(true);
        }
    };

    const { pathname } = useLocation();

    useEffect(() => {
        const routesToScrollTop = [
            "/aboutus",
            "/services",
            "/portfolio",
            "/contact-us",
            "/service-mobile-app",
            "/jointeam",
            "/blog",
            "/privacy-policy",
            "/terms-conditions",
        ];

        if (routesToScrollTop.includes(pathname)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header
                className={`flw topseo-header header_fix ${isScrolled ? "scrolled" : ""
                    }`}
            >
                <div className="seo-wrap-menu">
                    <div className="menu-box flw menu-style-1 sticky-menu topseo topseo-not-bottom topseo-pinned topseo-top">
                        <div className="container">
                            <div className="menu-box-nav flw">
                                <div className="menu-box-left">
                                    <div className="logo lg-top">
                                        <Link to="/contact-us">
                                            <div className="frame-66-nTy">
                                                <div className="call-calling-gJT"></div>
                                                <div className="contact-us-bgK">Contact Us</div>
                                            </div>
                                        </Link>
                                        <a href="/">
                                            <div className="group-3-yio">
                                                <img
                                                    src="images/ishivaxlogo.png"
                                                    className="group-2-6oR"
                                                    alt="Logo"
                                                />
                                            </div>
                                        </a>
                                        {isPopupOpen ? (
                                            <p onClick={togglePopup}>
                                                <div className="frame-68-eHD">
                                                    <div
                                                        className="menu-w1R hover_with_img"
                                                        style={{
                                                            backgroundImage: "url(./images/close-square.png)",
                                                        }}
                                                    ></div>
                                                    <div className="menus-U1M">Close</div>
                                                </div>
                                            </p>
                                        ) : (
                                            <p onClick={togglePopup}>
                                                <div className="frame-68-eHD">
                                                    <div className="menu-w1R"></div>
                                                    <div className="menus-U1M">Menu</div>
                                                </div>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {isPopupOpen && (
                <div className={`popup ${isPopupOpen ? 'show' : ''} ${isAnimating ? 'hide' : ''}`} onClick={togglePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="fw-page-builder-content">
                            <div className="fw-main-row black-bg-content">
                                <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                                    {/* <div className="fw-row">
                                        <div className="fw-col-xs-12 ">
                                            <div className="fw-divider-space" style={{ marginTop: '80px' }}></div>
                                        </div>
                                    </div> */}
                                    <div className="fw-container">

                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-1" src="./images/Vector-line-straight.png" />
                                        </div>
                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-2" src="./images/Vector-line-straight.png" />
                                        </div>

                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-3" src="./images/Vector-line-straight.png" />
                                        </div>
                                        <div className="seo-media-images">
                                            <img className="top-image-arrow-4" src="./images/Vector-line-straight.png" />
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
                                                    <div className="fw-menus fw-heading-h2">
                                                        <h2 className='fw-special-title vector-heading'>MENUS
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
                                                <div className="fw-divider-space" style={{ marginTop: '50px' }}></div>
                                            </div>
                                        </div>
                                        <div className="fw-container">
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="home-Vts"><Link to='/'>Home</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="home-Vts"><Link to='/aboutus'>About Us</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="home-Vts"><Link to='/services'>Services</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="home-Vts"><Link to="/portfolio">Portfolio</Link></div>
                                                </div>
                                            </div>

                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="home-Vts"><Link to="/blog">Blogs</Link></div>
                                                </div>
                                            </div>
                                            <div className="fw-row">
                                                <div className="fw-col-xs-12 ">
                                                    <div className="home-Vts"><Link to="/contact-us">Contact Us</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 ">
                                                <div className="fw-divider-space" style={{ marginTop: '250px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
