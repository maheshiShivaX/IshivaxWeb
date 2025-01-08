import { useEffect, useState } from "react";
import { getWorkType, saveEnquiry } from "../../../_services";
import Footer from "../Footer";
import Header from "../Header";
import { Toaster, toast } from "react-hot-toast";

import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import ClipLoader from "react-spinners/ClipLoader";

const ContactUs = () => {
    const [workTypeData, setWorkTypeData] = useState();
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isLodding, setIsLodding] = useState(false);
    const [error, setError] = useState('');

    // Regular expression for basic validation of the phone number with country code
    const phoneValidationRegex = /^\+([1-9]{1,4})\s?([0-9]{6,14})$/;

    const validatePhoneNumber = () => {
        const { contactNo } = formData;
        if (!contactNo || !phoneValidationRegex.test(contactNo)) {
            setError("Please enter a valid phone number with country code.");
            return false;
        }
        setError(''); // Clear error if valid
        return true;
    };

    const [formData, setFormData] = useState({
        enquiryId: 0,
        name: "",
        emailId: "",
        contactNo: "",
        workTypeId: 0,
        remark: "",
        isActive: true,
        createdBy: 0
    });

    const fetchWorkType = async () => {
        try {
            const data = await getWorkType();
            setWorkTypeData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    useEffect(() => {
        fetchWorkType();
    }, [])

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        console.log(formData)
    }

    // Special handler for PhoneInput
    const handlePhoneChange = (value) => {
        setPhone(`+${value}`);

        // if (value != null && value != "") {
        //     const isValid = isValidPhoneNumber(value);
        //   setIsPhone  Valid(isValid);
        // }

        setFormData(prev => ({
            ...prev,
            contactNo: `+${value}`  // Update contactNo in formData
        }));
    };


    const saveEnquiryData = async (e) => {



        e.preventDefault();

     

        setIsLodding(true);
        if (formData.workTypeId == 0 || formData.workTypeId == null) {
            toast.error('Please Select Work Type');
            setIsLodding(false);
            return
        }

        try {
            const res = await saveEnquiry(formData);
            if (res.isSuccess === 1) {
                setFormData({
                    name: "",
                    emailId: "",
                    contactNo: "",
                    workTypeId: 0,
                    remark: "",
                });
                setPhone('')
                toast.success("Enquiry sent successfully");
            }
        } catch (error) {
            console.log(error, 'gjgjh');
        } finally {
            // setFormData({
            //     name: "",
            //     emailId: "",
            //     contactNo: "",
            //     workTypeId: 0,
            //     remark: "",
            // });
            setIsLodding(false);
        }
    };






    return (
        <div>
            <div style={{position:'relative', zIndex:'9999999999' }}>
            <Toaster position="top-right" />
            </div>
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
                                            <h2 className='fw-special-title vector-heading'>CONTACT US
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
                                        <p className="heading-common-main">LET'S START WORKING TOGETHER. GET IN
                                            TOUCH
                                        </p>


                                    </div>
                                    <div className="fw-col-xs-12 ">

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
            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: '#f1f1f1' }}>
                    <div className="fw-container">

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>


                        <div className="fw-row">

                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title'>Have questions?<br />/ GET IN TOUCH</h2>
                                </div>
                                {/* <!-- <p className="portflio-deep-dive">Have questions?
                                </p>
                                <p className="portflio-deep-dive">
                                    Get in touch!</p> --> */}

                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">

                                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                                    </div>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/contact-location.svg" />
                                    <p className="content-loc-info">iShivax - 17, Civil Lines, Jaipur, Rajasthan - 302006 (Bharat)</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/contact-location.svg" />
                                    <p className="content-loc-info">iShivax LLC -205, The Hills Drive, Texas, Austin - 78738 (USA)</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/conttact-mobile-icon.svg" />
                                    <p className="content-loc-info">+91-9782345795 / +1-801 701 1806</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="./images/contact-email-icon.svg" />
                                    <p className="content-loc-info">business@ishivax.com</p>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                <form onSubmit={saveEnquiryData}>
                                    <fieldset>
                                        {/* <input type="hidden" name="access_key"
                                            value="acc730d2-4e5f-41da-a1f0-da53e38c0fe3" /> */}
                                        <div className="fw-row">
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">

                                                <input className="text-class" type="text" placeholder="Full Name" value={formData.name}
                                                    id="name" name="name" required onChange={handlechange} />

                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">

                                                <input type="email" placeholder="Email Address" id="emailId" value={formData.emailId}
                                                    name="emailId" required onChange={handlechange} />

                                            </div>
                                        </div>
                                        <div className="fw-row">

                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">
                                                {/* <input type="tel" id="contactNo" placeholder="Phone Number*" value={formData.contactNo}
                                                    name="contactNo" required onChange={handlechange} /> */}
                                                {/* <PhoneInput
                                                    id="phone"
                                                    name="contactNo"
                                                    required
                                                    //  defaultCountry="US"  // Default country code (US in this case)
                                                    value={formData.contactNo}  // This binds the value
                                                    onChange={handlePhoneChange}  // Special handler for phone number change
                                                    // countries={['US', 'IN', 'GB', 'CA', 'AU']} // Specify countries you want to show
                                                    // You can pass a custom render function here to display country name + code
                                                    disableDropdown={false}
                                                /> */}
                                                <PhoneInput
                                                    style={{ textAlign: "left" }}
                                                    country="IN" // Default country code set to India (+91)
                                                    value={phone} // Bind the phone number state
                                                    onChange={handlePhoneChange} // Update the state with the phone number on change
                                                    disableDropdown={false} // Enable country dropdown for selection
                                                    placeholder="Contact No"
                                                />
                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding mb-4 selcat_contact">
                                                <select id="workTypeId" name="workTypeId" onChange={handlechange}>
                                                    workTypeData
                                                    <option value="--Select--"  >--Select--
                                                    </option>
                                                    {workTypeData?.map((item, i) => (
                                                        <option key={i} value={item.workTypeId}>{item.workTypeName}
                                                        </option>

                                                    ))}



                                                </select>
                                            </div>
                                        </div>
                                        <div className="fw-row textarea">
                                            <div className="fw-col-xs-12 contact-form-padding">
                                                <textarea id="remark" placeholder="Message" value={formData.remark} onChange={handlechange}
                                                    name="remark"></textarea>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div className="fw-row">

                                        <button type="submit" className="frame-66-Y1q frame-portfolio-button" >
                                            <div className="frame-66-Y1q-text">
                                                {isLodding ? <div>  <ClipLoader
                                                    loading={isLodding}
                                                    size={15}
                                                    aria-label="Loading Spinner"
                                                    data-testid="loader"

                                                /> <span>Please wait...</span></div> : <div className="d-flex">Send Message  <div className="frame-66-Y1q-arrow"></div></div>
                                                }
                                            </div>

                                        </button>


                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://maps.app.goo.gl/hrpY4tvpMSnYMUPp8?g_st=iw">
                    <div className="contact-location-map">
                    </div>
                </a>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs;