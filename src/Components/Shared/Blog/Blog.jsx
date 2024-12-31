import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { getBlogDetailAll } from "../../../_services";
import { imagebaseurl } from "../../../config";


const Blog = () => {
    const [showModal, setShowModal] = useState(false);
    const [blogData, setBlogData] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    const getShortDescription = (description, wordLimit) => {


        const text = description.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
        const words = text.split(/\s+/); // Split by spaces

        //const words = description?.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };


    const handleModalToggle = (i) => {
        setShowModal(!showModal);
        setActiveIndex(i)
    };

    const fetchBlogDetailAll = async () => {
        try {
            const data = await getBlogDetailAll();
            setBlogData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    useEffect(() => {
        fetchBlogDetailAll();


    }, [])

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0'); // Ensure 2 digits for day
        const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits for month (months are 0-indexed)
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };


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
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className='fw-special-title vector-heading'>BLOGS
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
                                        <p className="heading-common-main">FULL DEDEICATED & EXPERIENCED
                                            DEVELOPER
                                        </p>

                                    </div>
                                    <div className="fw-col-xs-12 ">

                                    </div>
                                </div>

                            </div>

                            <div className="fw-row about-top-frame">
                                <div className="container">
                                    <div className="fw-col-xs-12 ">
                                        <div className="seo-media-images">
                                            <img className="services-image-desk"
                                                src="./images/TECHtechaboutus.png" />
                                        </div>
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

            <section className="blog_wepper_main">
                <div className="container">
                    <div className="blog_hedding">
                        <h2>My Blog</h2>
                    </div>
                    <div className="row">

                        {blogData?.map((item, i) => (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6" key={i}>
                                <div className="blog_wepper">
                                    <div className="blog_img_data">
                                        <img src={`${imagebaseurl}${item?.blogImage}`} alt="Blog" />
                                    </div>
                                    <div className="blog_text_weper">
                                        <span>{formatDate(item?.blogDate)}</span>
                                        <h3>{item?.blogTitle}</h3>
                                        <p>{getShortDescription(item?.blogDescrption, 20)}</p>
                                      {/* <p>  <div  dangerouslySetInnerHTML={{ __html:  item?.blogDescrption }} /></p> */}

                                        <Link to="#" onClick={() => handleModalToggle(i)}>Read More</Link>
                                    </div>
                                </div>

                                {/* Full-Width Centered Modal */}
                                <Modal show={showModal} onHide={handleModalToggle} dialogClassName="modal-xl">

                                    {activeIndex == i ? <>

                                        <Modal.Header closeButton>
                                            <Modal.Title>  {item?.blogTitle}</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>

                                            <div className="popup_content">
                                                <img src={`${imagebaseurl}${item?.blogImage}`} alt="" />
                                                <p ><div className="word-wrap"  dangerouslySetInnerHTML={{ __html: item?.blogDescrption }} />
                                                    {/* {item?.blogDescrption} */}
                                                </p>
                                            </div>
                                        </Modal.Body> </> : null}

                                    {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={handleModalToggle}>Close</Button>
                                </Modal.Footer> */}
                                </Modal>
                            </div>
                        ))}




                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}
export default Blog;