import { GetJobPost, SavePostEnquiry } from "../../../_services";
import Footer from "../Footer";
import Header from "../Header";
import '../Join/join.css';
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
const JoinOurTeam = () => {


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState();
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        emailid: "",
        mobileNo: "",
        postEnquiryId: 0,
        isActive: true,
        createdBy: 0,
        file:'',
        currentCtc:'',
        expectedCtc:'',
        jobPostId:0,
        noticePeriod:'',
        resumePath:''
    });
    const scrollToForm = () => {
        const formSection = document.getElementById('form_get');
        if (formSection) {
            const offset = 150; // Adjust scroll position to 30px above the element
            const top = formSection.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const fetchGetJobPost = async () => {
        try {
            const data = await GetJobPost();
            setPostData(data);
            console.log(data);
        } catch (error) {
            console.log(error, 'gjgjh');
        }
    };

    useEffect(() => {
        fetchGetJobPost();


    }, [])

    const handlechange = (e) => {
        const { name, value, type} = e.target;

        if (type === 'radio') {
            // For radio buttons, simply set the selected value
            setFormData(prevState => ({
                ...prevState,
                [name]: value, // Store the selected value for the radio button group
            }));
        } else if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.files[0], // Handle file uploads
            }));
        } else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const onSave = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const data = await SavePostEnquiry(formData);

            console.log('asdd', data);
            toast.success("Message Sent Successfully");

        } catch (error) {
            // console.error('Error submitting form data:', error.response || error.message || error);
            setError("Please try again later.");
            // console.log(formData,"formData")
        }
        finally {
            setFormData({
                firstName: "",
                lastName:"",
                emailid: "",
                mobileNo: "",
                postEnquiryId: 0,
                isActive: true,
                createdBy: 0,
                file:'',
                currentCtc:'',
                expectedCtc:'',
                jobPostId:0,
                noticePeriod:'',
                resumePath:''
            });
            
        }
    };

    return (
        <div> <div style={{position:'relative', zIndex:'9999999999' }}>
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
                                            <h2 className='fw-special-title vector-heading'>Career
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
                                        <p className="heading-common-main">Join Our Team</p>
                                        <p className="heading-common-content">Uncover the perfect role that aligns with your unique abilities and grab countless opportunities to take your career to new heights.</p>
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
            {/* <section className="join_wepper">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>EXPERIENCE THE ULTIMATE JOURNEY OF GROWTH WITH ABUNDANT OPPORTUNITIES!</h2>
                                <p>
                                    Better opportunities are always knocking on your door, it’s on you whether you want it to pass by or grab it with both hands. At A3Logics, the idea is to help our employees grow and get an experience of how it feels to work with the best possible resources at an international level. If you are ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
                                </p>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text">Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row our_join_row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>EXPERIENCE THE ULTIMATE JOURNEY OF GROWTH WITH ABUNDANT OPPORTUNITIES!</h2>
                                <p>
                                    Better opportunities are always knocking on your door, it’s on you whether you want it to pass by or grab it with both hands. At A3Logics, the idea is to help our employees grow and get an experience of how it feels to work with the best possible resources at an international level. If you are ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
                                </p>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text">Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row_set">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>EXPERIENCE THE ULTIMATE JOURNEY OF GROWTH WITH ABUNDANT OPPORTUNITIES!</h2>
                                <p>
                                    Better opportunities are always knocking on your door, it’s on you whether you want it to pass by or grab it with both hands. At A3Logics, the idea is to help our employees grow and get an experience of how it feels to work with the best possible resources at an international level. If you are ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
                                </p>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text">Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row join_form_wepper">
                    <form onSubmit={onSave}>

                            <div className="">
                                <h2>Join Our Team</h2>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                       
                                        <input type="text" placeholder="First Name" id="firstName" value={formData.firstName} className="form-control"
                                                    name="firstName" required onChange={handlechange} />

                                        
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                    <input type="text" placeholder="Last Name" id="lastName" value={formData.lastName} className="form-control"
                                                    name="lastName" required onChange={handlechange} />
                                     
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                 
                                        <input type="email" placeholder="Email Address" id="emailid" value={formData.emailid} className="form-control"
                                                    name="emailid" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                      
                                        <input type="text" placeholder="Phone Number" className="form-control" id="firstName" value={formData.mobileNo}
                                                    name="mobileNo" required onChange={handlechange} />
                                        
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                   
                                        <input type="text" placeholder="Current CTC" className="form-control" id="currentCtc" value={formData.currentCtc}
                                                    name="currentCtc" required onChange={handlechange} />

                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                       
                                        <input type="text" placeholder="Expected CTC" className="form-control" id="expectedCtc" value={formData.expectedCtc}
                                                    name="expectedCtc" required onChange={handlechange} />
                                                    
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                    <select id="jobPostId" name="jobPostId" onChange={handlechange}>
                                                    workTypeData
                                                    <option value="--Select--"  >--Select--
                                                    </option>
                                                    {postData?.map((item, i) => (
                                                        <option key={i} value={item.jobPostId}>{item.title}
                                                        </option>

                                                    ))}



                                                </select>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="join_input">
                                        <select id="noticePeriod" name="noticePeriod" onChange={handlechange} >
                                            <option value="">Notice Period</option>
                                            <option value="1 Month">1 Month</option>
                                            <option value="2 Month">2 Month</option>
                                            <option value="3 Month">3 Month</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="join_input">
                                        <div className="file-upload">
                                       
                                            <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handlechange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                                    <div className="join_input">
                                        <div className="fw-row">
                                            <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                                <div className="frame-66-Y1q-text">Send Message</div>
                                                <div className="frame-66-Y1q-arrow"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section> */}

            <section className="join_wepper">
                <div className="container">
                    <div className="row row_flex_first">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>EXPERIENCE THE ULTIMATE JOURNEY OF GROWTH WITH ABUNDANT OPPORTUNITIES!</h2>
                                <p>
                                    Better opportunities are always knocking on your door, it’s on you whether you want it to pass by or grab it with both hands. At A3Logics, the idea is to help our employees grow and get an experience of how it feels to work with the best possible resources at an international level. If you are ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
                                </p>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text" onClick={scrollToForm}>Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row our_join_row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>EXPERIENCE THE ULTIMATE JOURNEY OF GROWTH WITH ABUNDANT OPPORTUNITIES!</h2>
                                <p>
                                    Better opportunities are always knocking on your door, it’s on you whether you want it to pass by or grab it with both hands. At A3Logics, the idea is to help our employees grow and get an experience of how it feels to work with the best possible resources at an international level. If you are ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
                                </p>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text" onClick={scrollToForm}>Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row_set">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>EXPERIENCE THE ULTIMATE JOURNEY OF GROWTH WITH ABUNDANT OPPORTUNITIES!</h2>
                                <p>
                                    Better opportunities are always knocking on your door, it’s on you whether you want it to pass by or grab it with both hands. At A3Logics, the idea is to help our employees grow and get an experience of how it feels to work with the best possible resources at an international level. If you are ready to embark on a journey with loads of milestones to achieve, and hundreds of moments to cherish, then we might be the best place for you.
                                </p>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text" onClick={scrollToForm}>Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row join_form_wepper" id="form_get">
                       

                        <form onSubmit={onSave}>

<div className="">
    <h2>Join Our Team</h2>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
           
            <input type="text" placeholder="First Name" id="firstName" value={formData.firstName} className="form-control"
                        name="firstName" required onChange={handlechange} />

            
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
        <input type="text" placeholder="Last Name" id="lastName" value={formData.lastName} className="form-control"
                        name="lastName" required onChange={handlechange} />
         
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
     
            <input type="email" placeholder="Email Address" id="emailid" value={formData.emailid} className="form-control"
                        name="emailid" required onChange={handlechange} />
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
          
            <input type="text" placeholder="Phone Number" className="form-control" id="firstName" value={formData.mobileNo}
                        name="mobileNo" required onChange={handlechange} />
            
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
       
            <input type="text" placeholder="Current CTC" className="form-control" id="currentCtc" value={formData.currentCtc}
                        name="currentCtc" required onChange={handlechange} />

        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
           
            <input type="text" placeholder="Expected CTC" className="form-control" id="expectedCtc" value={formData.expectedCtc}
                        name="expectedCtc" required onChange={handlechange} />
                        
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
        <select id="jobPostId" name="jobPostId" onChange={handlechange}>
                        workTypeData
                        <option value="--Select--"  >--Select--
                        </option>
                        {postData?.map((item, i) => (
                            <option key={i} value={item.jobPostId}>{item.title}
                            </option>

                        ))}



                    </select>
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="join_input">
            <select id="noticePeriod" name="noticePeriod" onChange={handlechange} >
                <option value="">Notice Period</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Month">2 Month</option>
                <option value="3 Month">3 Month</option>
                
            </select>
        </div>
    </div>
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="join_input">
            <div className="file-upload">
           
                <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handlechange} />
            </div>
        </div>
    </div>
    <div className="col-xxl-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
        <div className="join_input">
            <div className="fw-row">
                <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                    <div className="frame-66-Y1q-text">Send Message</div>
                    <div className="frame-66-Y1q-arrow"></div>
                </button>
            </div>
        </div>
    </div>

</div>
</form>
                    </div>
                </div>
            </section>



            <Footer/>
        </div>
    )
}

export default JoinOurTeam;