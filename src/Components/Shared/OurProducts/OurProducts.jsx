import Header from "../Header";
import '../../../Components/Shared/OurProducts/OurProduct.css';
import { Link } from "react-router-dom";
import Footer from "../Footer";
const OurProducts = () => {
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
                                            <h2 className='fw-special-title vector-heading'>Our Products
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
                                        <p className="heading-common-main">BUILDING A LIFETIME PARTNERSHIP IN BUSINESS</p>
                                        <p className="heading-common-content">We rely on our partners to lead customers to the new style of business</p>
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

            <section className="ourproducts_tabs">
                <div className="container">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Lifecode" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Lifecode</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Shrisetu" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Shrisetu</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Smartqr " type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Smart Qr </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#CRMservices  " type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CRM Services </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Jaipurtouch " type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Jaipurtouch </button>
                        </li>


                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="Lifecode" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="bg_image_add">
                                <div className="bg_color_our_product_weeper">
                                    <img src="./images/life-code-banner.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row our_product_wepper_main row_flex_only">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="">
                                                <div className="our_product_hedding">
                                                    <h2>Lifecode</h2>
                                                    <Link to='https://www.lifecode.co.in/'>Lifecode.co.in</Link>
                                                    <div className="our_star_wepper">
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <span>Installs - 5M</span>
                                                    </div>
                                                    <p>CarDekho.com, sums up as the #1 Car searching platform in India. Right from your dream of buying a new car or a used one, to your wish of selling the old, it is all sheltered under the convenience of this platform as it advances with a range of flexibilities for potential buyers and sellers.</p>
                                                </div>
                                                <div className="play_store_wepper">
                                                    <img src="./images/app-store.png" alt="" />
                                                    <img src="./images/palystore.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="right_side_images ">
                                                <img src="./images/life-code-right.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row our_product_wepper_main our_product_wepper_bottom">

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="right_side_images left_side_images">
                                                <img src="./images/life-code-right1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="">
                                                <div className="our_product_hedding">
                                                    <h2>Lifecode</h2>
                                                    <Link to='https://www.lifecode.co.in/'>Lifecode.co.in</Link>
                                                    <div className="our_star_wepper">
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <span>Installs - 5M</span>
                                                    </div>
                                                    <p>CarDekho.com, sums up as the #1 Car searching platform in India. Right from your dream of buying a new car or a used one, to your wish of selling the old, it is all sheltered under the convenience of this platform as it advances with a range of flexibilities for potential buyers and sellers.</p>
                                                </div>
                                                <div className="play_store_wepper">
                                                    <img src="./images/app-store.png" alt="" />
                                                    <img src="./images/palystore.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="Shrisetu" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div className="bg_image_add">
                                <div className="bg_color_our_product_weeper">
                                    <img src="./images/life-code-banner.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row our_product_wepper_main row_flex_only">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="">
                                                <div className="our_product_hedding">
                                                    <h2>Lifecode</h2>
                                                    <Link to='https://www.lifecode.co.in/'>Lifecode.co.in</Link>
                                                    <div className="our_star_wepper">
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <span>Installs - 5M</span>
                                                    </div>
                                                    <p>CarDekho.com, sums up as the #1 Car searching platform in India. Right from your dream of buying a new car or a used one, to your wish of selling the old, it is all sheltered under the convenience of this platform as it advances with a range of flexibilities for potential buyers and sellers.</p>
                                                </div>
                                                <div className="play_store_wepper">
                                                    <img src="./images/app-store.png" alt="" />
                                                    <img src="./images/palystore.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="right_side_images ">
                                                <img src="./images/life-code-right.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row our_product_wepper_main our_product_wepper_bottom">

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="right_side_images left_side_images">
                                                <img src="./images/life-code-right1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="">
                                                <div className="our_product_hedding">
                                                    <h2>Lifecode</h2>
                                                    <Link to='https://www.lifecode.co.in/'>Lifecode.co.in</Link>
                                                    <div className="our_star_wepper">
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <img src="./images/starsilhouette.svg" alt="" />
                                                        <span>Installs - 5M</span>
                                                    </div>
                                                    <p>CarDekho.com, sums up as the #1 Car searching platform in India. Right from your dream of buying a new car or a used one, to your wish of selling the old, it is all sheltered under the convenience of this platform as it advances with a range of flexibilities for potential buyers and sellers.</p>
                                                </div>
                                                <div className="play_store_wepper">
                                                    <img src="./images/app-store.png" alt="" />
                                                    <img src="./images/palystore.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="Smartqr" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Smart Qr</div>
                        <div class="tab-pane fade" id="CRMservices" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">CRM Services</div>
                        <div class="tab-pane fade" id="Jaipurtouch" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Jaipur touch</div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default OurProducts;