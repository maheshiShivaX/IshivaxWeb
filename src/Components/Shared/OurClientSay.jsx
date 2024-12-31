import React, { useEffect, useState } from "react";
import { GetTestimonialApproved } from "../../_services";
// import "./Reviews.css"; // Import your CSS file

const Reviews = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [testimonialData, setTestimonialData] = useState();


    

    const fetchGetTestimonialApproved = async () => {
        try {
            const data = await GetTestimonialApproved();
            setTestimonialData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    useEffect(() => {
        fetchGetTestimonialApproved();


    }, [])



    const reviews = [
        {
            text: "I've been hearing great things about this company as of recent and decided to finally visit your site and I'm impressed! It's well-designed; easy to navigate; and offers plenty of services that I foresee myself using to take my business to the next level. Kudos!",
            name: "Quincy",
        },
        {
            text: "iShivax LLC team has remotely resolved every issue with my website & mobile application. Once my Website & mobile app was not responding and I asked for help from the Gig Squat and GoDaddy , they could not fix it. So I called iShivax LLC not hoping that they could do anything, but they not only fixed the issue but later worked on my Computer and fix all computer problems and fix it like a brand new Computer... I am truly indebted to iShivax LLC Without them I would be hours, if not days on the phone with Microsoft, GoDaddy and other software development companies and a candidate for a mental asylum. I am so lucky that I am customer of iShivax LLC and I have access to them almost immediately. Short and sweet, iShivax team is genius in what they are doing. Certified New Life Story Coach, Founder of New Life Choices.",
            name: "Zarah Marashi",
        },
        {
            text: "They think about products in terms of how it works and not just how it looks. They’re experts at what they do.",
            name: "Neil Jogleka",
        },
    ];

    const plusSlides = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex > testimonialData.length) newIndex = 1;
        if (newIndex < 1) newIndex = testimonialData.length;
        setSlideIndex(newIndex);
    };

    return (
        <section>
            <div className="reviews_reviews__4RZyN fw-main-row middle-content" id="reviews">
                <div className="container reviews_reviews_container__sN1vM">
                    <div className="reviews_reviews_left__pEaQs">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className="fw-special-title">WHAT OUR CLIENT SAY</h2>
                        </div>
                        <p className="reviews_reviews_text__wze2u">
                            Our commitment to clients worldwide: Boosted network connections for seamless operations.
                        </p>
                    </div>

                    <div className="reviews_reviews_right__d9kYf">
                        <div className="reviews-slider_reviews_wrapper__sIYGB">
                            {testimonialData?.map((item, index) => (
                                <div
                                    key={index}
                                    className="reviews-slider_reviews_item__WYB7F"
                                    style={{ display: slideIndex === index + 1 ? "block" : "none" }}
                                >
                                    <div className="reviews-block_reviews_block__dwhs1">
                                        <svg
                                            className="reviews-block_reviews_blockquote__Jy_eQ"
                                            viewBox="0 0 64 56"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M29.2149 20.1929..." data-fill="true"></path>
                                            <path d="M63.9431 20.1929..." data-fill="true"></path>
                                        </svg>

                                        <div className="reviews-block_reviews_content__HkM_1">
                                            <p className="reviews-block_reviews_review__h1LqO">{item.description}</p>
                                            <div className="reviews-block_reviews_row__LdFqX">
                                                <div className="reviews-block_reviews_client__f6H6B">
                                                    <div className="reviews-block_reviews_client_column__TvOZ4">
                                                        <h3 className="reviews-block_reviews_client_name__Lft3K">{item.clientName}</h3>
                                                    </div>
                                                </div>

                                                <div className="reviews-block_reviews_controls__PVp2m">

                                                    <div className="reviews-block_reviews_controls_prevBtn__2tekQ" onClick={() => plusSlides(-1)} style={{ fontSize: '30px' }}>→</div>
                                                    <div className="reviews-block_reviews_controls_nextBtn__k5h_0" onClick={() => plusSlides(1)} style={{ fontSize: '30px' }}>→</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fw-row">
                <div className="slider">
                    <div className="slider-items" id="sliderItems">
                        <img className="frame-logo-image" src="./images/Anutechlogo.png" alt="" /><img className="frame-logo-image" src="./images/RHB.png" alt="" /><img className="frame-logo-image" src="./images/Super Singer+.png" alt="" />
                        <img className="frame-logo-image" src="./images/Aagaman.png" alt="" /><img className="frame-logo-image" src="./images/1st India.png" alt="" /><img className="frame-logo-image" src="./images/DARA Thermoplast.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/2.png" alt="" /><img className="frame-logo-image" src="./images/companies/3.png" alt="" /><img className="frame-logo-image" src="./images/companies/12.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/13.png" alt="" /><img className="frame-logo-image" src="./images/companies/14.png" alt="" /><img className="frame-logo-image" src="./images/companies/15.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/16.png" alt="" /><img className="frame-logo-image" src="./images/companies/17.png" alt="" /><img className="frame-logo-image" src="./images/companies/18.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/19.png" alt="" /><img className="frame-logo-image" src="./images/companies/20.png" alt="" /><img className="frame-logo-image" src="./images/companies/21.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/22.png" alt="" /><img className="frame-logo-image" src="./images/companies/23.png" alt="" /><img className="frame-logo-image" src="./images/companies/24.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/25.png" alt="" /><img className="frame-logo-image" src="./images/companies/26.png" alt="" /><img className="frame-logo-image" src="./images/companies/27.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/28.png" alt="" />
                        {/* <img className="frame-logo-image" src="./images/companies/29.png" alt="" /> */}
                        <img className="frame-logo-image" src="./images/companies/30.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/c1.png" alt="" /><img className="frame-logo-image" src="./images/companies/c2.png" alt="" /><img className="frame-logo-image" src="./images/companies/c3.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/c4.png" alt="" /><img className="frame-logo-image" src="./images/companies/c5.png" alt="" /><img className="frame-logo-image" src="./images/companies/c6.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/c7.png" alt="" /><img className="frame-logo-image" src="./images/companies/c8.png" alt="" /><img className="frame-logo-image" src="./images/companies/c9.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/c10.png" alt="" /><img className="frame-logo-image" src="./images/companies/c11.png" alt="" /><img className="frame-logo-image" src="./images/companies/scortis.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/1.png" alt="" /><img className="frame-logo-image" src="./images/companies/2.png" alt="" /><img className="frame-logo-image" src="./images/companies/3.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/4.png" alt="" /><img className="frame-logo-image" src="./images/companies/5.png" alt="" /><img className="frame-logo-image" src="./images/companies/6.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/7.png" alt="" /><img className="frame-logo-image" src="./images/companies/8.png" alt="" /><img className="frame-logo-image" src="./images/companies/9.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/10.png" alt="" /><img className="frame-logo-image" src="./images/companies/11.png" alt="" /><img className="frame-logo-image" src="./images/companies/12.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/13.png" alt="" /><img className="frame-logo-image" src="./images/companies/14.png" alt="" /><img className="frame-logo-image" src="./images/companies/15.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/16.png" alt="" /><img className="frame-logo-image" src="./images/companies/17.png" alt="" /><img className="frame-logo-image" src="./images/companies/18.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/19.png" alt="" /><img className="frame-logo-image" src="./images/companies/20.png" alt="" /><img className="frame-logo-image" src="./images/companies/21.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/22.png" alt="" /><img className="frame-logo-image" src="./images/companies/23.png" alt="" /><img className="frame-logo-image" src="./images/companies/24.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/25.png" alt="" /><img className="frame-logo-image" src="./images/companies/26.png" alt="" /><img className="frame-logo-image" src="./images/companies/27.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/28.png" alt="" /><img className="frame-logo-image" src="./images/companies/29.png" alt="" /><img className="frame-logo-image" src="./images/companies/30.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/31.png" alt="" /><img className="frame-logo-image" src="./images/companies/32.png" alt="" /><img className="frame-logo-image" src="./images/companies/33.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/34.png" alt="" /><img className="frame-logo-image" src="./images/companies/35.png" alt="" /><img className="frame-logo-image" src="./images/companies/36.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/37.png" alt="" /><img className="frame-logo-image" src="./images/companies/38.png" alt="" /><img className="frame-logo-image" src="./images/companies/39.png" alt="" />
                        <img className="frame-logo-image" src="./images/companies/40.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="fw-row">
                <div className="fw-col-xs-12">
                    <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                </div>
            </div>

        </section>

    );
};

export default Reviews;
