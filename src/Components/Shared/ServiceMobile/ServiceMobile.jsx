

import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";


const ServicesMobile = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapsible = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What services does iShivax offer for web and app development?',
            answer:
                'iShivax offers a wide range of services including custom web development, mobile app development, e-commerce solutions, and more. Our team is skilled in various technologies to meet your specific needs.',
        },
        {
            question: 'How long does it take to develop a website or mobile app with iShivax?',
            answer:
                'The timeline for a project varies based on its complexity and requirements. We work closely with clients to establish timelines and deliver high-quality solutions within a reasonable timeframe.',
        },
        {
            question: 'What makes iShivax different from other web and app development companies?',
            answer:
                'iShivax stands out for its commitment to innovation, quality, and customer satisfaction. We prioritize understanding your business goals and delivering tailored solutions that exceed expectations.',
        },
        {
            question: 'Can iShivax help with ongoing maintenance and updates for my website or app?',
            answer:
                'Yes, we offer ongoing maintenance and support services to ensure your website or app remains up-to-date and secure. Our team is always available to address any issues and implement necessary updates.',
        },
    ];

    return (
        <div>
            <Header />
            {/* <section>
                <div class="fw-main-row black-bg-content-services">
                    <div class="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                        <div class="fw-row">
                            <div class="fw-col-xs-12 ">
                                <div class="fw-divider-space" style={{ marginTop: '90px' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: 'f1f1f1' }}>



                    <div className="fw-row">
                        <div className="fw-col-xs-12 ">

                            <div className="fw-divider-space" style={{ marginTop: '120px' }}></div>
                        </div>
                    </div>



                    <div className="fw-container">


                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <p className="home-services-link"><b><Link to="/">Home</Link></b> {'>'} <b><Link
                                    to="/services">Services</Link> </b> {'>'} Mobile App Development
                                </p>
                            </div>
                        </div>



                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                            </div>
                        </div>


                        <div className="fw-row">

                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6  ">
                                <p className="heading-services-subpage">Mobile app Development company for
                                    feature-packed & transformative mobile experiences</p>
                                <p className="portfolio-our-agency">We offer top-natch solutions in internet of
                                    things (iot), ar, ibeacon, wearables, gaming & beyond</p>
                                <div className="frame-66-Y1q frame-submit-requir-button">
                                    <div className="frame-66-Y1q-text">Submit Your Requirement</div>
                                    <div className="frame-66-Y1q-arrow"></div>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-6  ">
                                <div className="seo-media-images">
                                    <img src="./images/mobile-services-main.png" />
                                </div>
                            </div>


                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>









                        <div className="fw-row">
                            <div className="frame-black-services">

                                <div className="frame-1-QWE">
                                    <img className="services-projects-image"
                                        src="./images/Framewhitemobileapp.svg" />
                                    <p className="services-project-number"><b>100+</b></p>
                                    <p className="services-project-name">Mobile App Delivered</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image"
                                        src="./images/Framewhiteteamstrength.svg" />
                                    <p className="services-project-number"><b>50+</b></p>
                                    <p className="services-project-name">Team Strength</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image"
                                        src="./images/Framewhiterepestbusiness.svg" />
                                    <p className="services-project-number"><b>60%</b></p>
                                    <p className="services-project-name">Repeat Business</p>
                                </div>
                                <div className="frame-1-QWE">
                                    <img className="services-projects-image"
                                        src="./images/FramewhiteHappyclient.svg" />
                                    <p className="services-project-number"><b>1200</b></p>
                                    <p className="services-project-name">Happy Client</p>
                                </div>
                            </div>
                        </div>
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
                                            <h2 className='fw-special-title'>ABOUT MOBILE APP DEVELOPMENT</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                        <p className="portflio-deep-dive">Building Compelling Mobile Apps for
                                            iPhone and Android</p>
                                    </div>
                                    <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                        <p className="portfolio-our-agency">Key strategies include designing an
                                            intuitive interface, leveraging platform-specific features,
                                            optimizing performance, providing personalization options,
                                            ensuring seamless integration, releasing regular updates, and
                                            incorporating user feedback for continuous improvement. These
                                            strategies help in engaging users and making your app stand out.
                                        </p>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">

                                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003976appproto.svg" />
                                    <p className="frame-services-content-1">App Prototyping & Strategy</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003977cloud.svg" />
                                    <p className="frame-services-content-1">Cloud Mobility Solutions</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003978cross-plat.svg" />
                                    <p className="frame-services-content-1">Cross-platform App Development</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003979m-commerce.svg" />
                                    <p className="frame-services-content-1">m-Commerce, B2B & B2C</p>


                                </div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003983enterprise.svg" />
                                    <p className="frame-services-content-1">Enterprise App Development</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003982appmain.svg" />
                                    <p className="frame-services-content-1">App Maintenance Services</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003981integration.svg" />
                                    <p className="frame-services-content-1">Integration with existing enterprise
                                        services & data</p>


                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-3 ">

                                <div className="frame-1-RTY">
                                    <img className="window-image"
                                        src="./images/Frame 1000003980custommobile.svg" />
                                    <p className="frame-services-content-1">Custom Mobile App Development</p>


                                </div>
                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">


                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">

                                <div className="frame-66-Y1q frame-submit-requir-button">
                                    <div className="frame-66-Y1q-text">Let's Discuss Your Project</div>
                                    <div className="frame-66-Y1q-arrow"></div>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4 ">


                            </div>

                        </div>




                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>



                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title' style={{ textAlign: 'center' }}>INDUSTRIES</h2>
                                </div>
                            </div>
                        </div>


                        <div className="fw-row">
                            <div className="fw-col-xs-12  ">
                                <p className="portflio-deep-dive" style={{ textAlign: 'center' }}>Mobile apps
                                    spanning a range of industries</p>
                            </div>
                            <div className="fw-col-xs-12 ">
                                <p className="portfolio-our-agency" style={{ textAlign: 'center' }}>Key strategies
                                    include designing an intuitive interface</p>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-indus">
                                <div className="frame-2-IJU" style={{ backgroundColor: 'black' }}>
                                    <img className="hc-image" src="./images/industries-healthcare.svg" />
                                    <p className="frame-services-content-2" style={{ color: 'white' }}>Healthcare</p>
                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industires-bankingfinance.svg" />
                                    <p className="frame-services-content-2">Banking Finance</p>
                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-realestate.svg" />
                                    <p className="frame-services-content-2">Real Estate</p>
                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-realestate.svg" />
                                    <p className="frame-services-content-2">Social Network</p>


                                </div>
                            </div>
                        </div>

                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-events.svg" />
                                    <p className="frame-services-content-2">Events & Tickets</p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-transport.svg" />
                                    <p className="frame-services-content-2">Transport & Automotive</p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-ecommerce.svg" />
                                    <p className="frame-services-content-2">E-Commerce</p>


                                </div>
                            </div>
                            <div className="fw-col-indus ">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-media.svg" />
                                    <p className="frame-services-content-2">Media & Entertainment</p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-elearnign.svg" />
                                    <p className="frame-services-content-2">
                                        Education &
                                        eLearning
                                    </p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image"
                                        src="./images/industries-directory.svg" />
                                    <p className="frame-services-content-2">Directory</p>


                                </div>
                            </div>
                        </div>

                        <div className="fw-row" style={{ display: 'flex' }}>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="./images/industries-travelhospitality.svg" />
                                    <p className="frame-services-content-2">
                                        Travel & Hospitality</p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="./images/industries-foodandrest.svg" />
                                    <p className="frame-services-content-2">Food & Restaurant </p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="./images/industries-enterprise.svg" />
                                    <p className="frame-services-content-2">Enterprise</p>


                                </div>
                            </div>
                            <div className="fw-col-indus">

                                <div className="frame-2-IJU">
                                    <img className="hc-image" src="./images/industires-on-demand.svg" />
                                    <p className="frame-services-content-2">On-Demand Service</p>


                                </div>
                            </div>
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>

                <div className="fw-main-row black-bg-content">
                    <div className="fw-full-container-top">
                        <div className="content-under-image">

                            <div className="fw-row ">
                                <img className="vector-line-1" src="./images/Vector-upper-arrow.png" />
                            </div>

                            <div className="fw-row">
                                <div className="fw-container ">
                                    <div className="fw-col-md-4 vector-className">
                                        <div className="dot-1"></div>
                                        <div className="dot-2"></div>
                                        <img className="vector-cross-1" src="./images/vector.png" />
                                        <div className="dot-3"></div>
                                        <div className="dot-4"></div>
                                    </div>

                                    <div className="fw-col-md-4">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className='fw-special-title vector-heading'>GET IN TOUCH
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="fw-col-md-4  vector-className">
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
                                        <p className="services-for-more-info">Find out about how our
                                            <b>services</b> can be integrated into <b>your business.x</b>
                                        </p>
                                    </div>
                                    <div className="fw-col-xs-12"
                                        style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div className="frame-66-Y1q join-our-team-button">
                                            <div className="frame-66-Y1q-arrow get-quote-logo"></div>
                                            <div className="frame-66-Y1q-text join-our-team-text">Get A Quote
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: '#f1f1f1' }}>
                    <div className="fw-container">
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className="fw-special-title">FAQ</h2>
                                </div>
                                <p className="exciting-ER4">Frequently Asked Questions</p>
                                <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>

                                <div>
                                    {faqs.map((faq, index) => (
                                        <div key={index}>
                                            <button
                                                className={`collapsible ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => toggleCollapsible(index)}
                                            >
                                                {faq.question}
                                            </button>
                                            <div
                                                className="collapsible-content"
                                                style={{
                                                    maxHeight: activeIndex === index ? '200px' : '0', // Use a fixed height for the transition
                                                    overflow: 'hidden',
                                                    transition: 'max-height 0.5s ease-in-out, padding 0.5s ease-in-out', // Transition for smooth animation
                                                    padding: activeIndex === index ? '10px 0' : '0 0', // Add padding when expanded
                                                }}
                                            >
                                                <p className="portfolio-our-agency">{faq.answer}</p>
                                            </div>
                                            <hr style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ServicesMobile;