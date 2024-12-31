import React, { useState, useEffect } from 'react';
import OurMission from '../images/eminent-OurMission.png'
import { Link } from 'react-router-dom';

const Overview = () => {
    const [activeContent, setActiveContent] = useState('our-mission-content');
    const [imageUrl, setImageUrl] = useState('./images/eminent-OurMission.png');
    const [activeButton, setActiveButton] = useState('our-mission-btn'); // Track which button is active

    useEffect(() => {
        // Initially show the "Our Mission" content
        showContent('our-mission-content', './images/eminent-OurMission.png', 'our-mission-btn');
    }, []);

    const showContent = (contentId, imageUrl, buttonId) => {
        setActiveContent(contentId);
        setImageUrl(imageUrl);
        setActiveButton(buttonId); // Set the active button
    };

    return (
        <div>
            <div className="fw-main-row middle-content">
                <div className="fw-container">
                    <div className="fw-row">
                        <div className="fw-col-xs-12">
                            <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                        </div>
                    </div>

                    <div className="fw-col-xs-12 fw-col-sm-6">
                        <div className="fw-row">
                            <div className="fw-heading fw-heading-h2">
                                <h2 className="fw-special-title">OVERVIEW</h2>
                            </div>
                            <p className="exciting-ER4">
                                Driving global business success <br />
                                with pioneering IT solutions.
                            </p>
                        </div>
                        <div className="fw-row">
                            <div className="textblock-shortcode clear">
                                <p>
                                    iShivax, a global IT leader, offers innovative software, web, and app development, IoT, and automation, driving efficiency and market leadership.
                                </p>
                            </div>

                            <div className="frame-8082-ZNf">
                                {/* Buttons for selecting content */}
                                <div
                                    id="our-mission-btn"
                                    className={`frame-8079-tfq ${activeButton === 'our-mission-btn' ? 'active' : ''}`}
                                    onClick={() => showContent('our-mission-content', `${OurMission}`, 'our-mission-btn')}
                                >
                                    Our Mission
                                </div>
                                <div
                                    id="our-vission-btn"
                                    className={`frame-8079-tfq ${activeButton === 'our-vission-btn' ? 'active' : ''}`}
                                    onClick={() => showContent('our-vission-content', './images/OurVisionoverview.png', 'our-vission-btn')}
                                >
                                    Our Vision
                                </div>
                                <div
                                    id="awards-win-btn"
                                    className={`frame-8079-tfq ${activeButton === 'awards-win-btn' ? 'active' : ''}`}
                                    onClick={() => showContent('awards-win-content', './images/AwardsWinoverview.png', 'awards-win-btn')}
                                >
                                    Awards Win
                                </div>
                            </div>


                            <div className="auto-group-yyaf-Qw1">
                                {activeContent === 'our-mission-content' && (
                                    <div className="our-mission-content">
                                        <p>
                                            At iShivax, we empower global businesses with transformative
                                            digital technology. Our innovative IT solutions in software,
                                            web, mobile apps, IoT, and automation meet current needs and
                                            anticipate future challenges. We foster excellence and
                                            collaboration to achieve sustainable growth and build lasting,
                                            trusted partnerships.
                                        </p>
                                    </div>
                                )}

                                {activeContent === 'our-vission-content' && (
                                    <div className="our-vission-content">
                                        <p>
                                            At iShivax, we aim to lead in IT innovation, bridging current
                                            tech with future demands. We develop cutting-edge, accessible,
                                            reliable solutions to inspire businesses of all sizes, enhancing
                                            productivity, efficiency, and creativity. Our vision is a world
                                            where technology continually enhances human endeavors and global
                                            connectivity.
                                        </p>
                                    </div>
                                )}

                                {activeContent === 'awards-win-content' && (
                                    <div className="awards-win-content">
                                        <p>
                                            Shivax has been honored with numerous industry awards,
                                            underscoring our commitment to technological excellence and
                                            superior client service.
                                        </p>
                                        <p>Our accolades include:</p>
                                        <p>
                                            Tech Innovator Award for our pioneering IoT and automation
                                            solutions.
                                        </p>
                                        <p>
                                            Best Software Development Company for exceptional software
                                            delivery.
                                        </p>
                                        <p>
                                            Global IT Leadership Award for our significant impact on global
                                            technology trends.
                                        </p>
                                        <p>
                                            Customer Satisfaction Excellence for outstanding client support.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            <Link to="/aboutus">
                                <div className="frame-66-Y1q frame-learn-button">
                                    <div className="frame-66-Y1q-text">Learn More</div>
                                    <div className="frame-66-Y1q-arrow"></div>
                                </div>
                            </Link>

                            <div className="fw-divider-space" style={{ marginTop: '30px' }}></div>
                        </div>
                    </div>

                    <div className="fw-col-xs-12 fw-col-sm-6">
                        <div className="seo-media-images image-rocket">
                            <img id="image-preview" src={imageUrl} alt="Content visual" />
                        </div>
                    </div>

                    <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
