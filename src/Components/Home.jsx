import Banner from "./Shared/Banner";
import CollaborateWith from "./Shared/CollaborateWith";
import Header from "./Shared/Header";
import Layout from "./Shared/Layout";
import OurClientSay from "./Shared/OurClientSay";
import OurEminentSolutions from "./Shared/OurEminentSolutions";
import OurPortfolio from "./Shared/OurPortfolio";
import Overview from "./Shared/Overview";
import ProudTech from "./Shared/ProudTech";
// import SideMenu from "./Shared/SideMenu";
import SmartDevelopment from "./Shared/SmartDevelopment";
import Video from "./Shared/Video";


const Home = () => {
    return (
        <Layout>
             <Banner />
             {/* <SideMenu /> */}
            <OurEminentSolutions/>
            <Overview/>
            <SmartDevelopment/>
            <Video/>
            <OurPortfolio/>
            <ProudTech/>
            <CollaborateWith/>
            <OurClientSay/>
        </Layout>
    )
}

export default Home;