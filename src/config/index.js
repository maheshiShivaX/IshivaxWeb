import axios from "axios";


export const baseurl ="https://www.indianfilms.in/IshivaxAPI/api/";
export const imagebaseurl ="https://www.indianfilms.in/IshivaxAPI/";

// export const baseurl ="http://localhost:5216/api/";
// export const imagebaseurl ="http://localhost:5216/";

export const API_URL ={
    GetBlogDetailAll : "BlogDetail/GetBlogDetailAll",
    GetProjectDetail:"ProjectDetail/GetProjectDetailHomeDisplay",
    GetProjectDetailAll:"ProjectDetail/GetProjectDetail",
    GetWorkType:"WorkType/GetWorkType",
    SaveEnquiry:"Enquiry/SaveEnquiry",
    GetTechPartnerHomePage:"TechPartner/GetTechPartnerHomePage",
    GetImageDetailByImageType:"ImageDetail/GetImageDetailByImageType",
    GetTestimonialApproved:"Testimonial/GetTestimonialApproved",
    GetPortfolioType:"PortfolioType/GetPortfolioType",
    GetJobPost:"JobPost/GetJobPost",

    SavePostEnquiry:"PostEnquiry/SavePostEnquiry",
}

// export function get(apiurl)
// {
//     axios.get(`${baseurl}${apiurl}`);
// }


const axiosIns = axios.create({
    baseURL: baseurl,  // Corrected from 'baseurl' to 'baseURL'
    headers: {
        'Content-Type': 'application/json'
    }
});
export default axiosIns;







