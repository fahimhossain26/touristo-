import Achievment from "../../component/achivment/Achievment";
import Banner from "../../component/banner/Banner";
import Banner2 from "../../component/banner/Banner2";
import Cards from "../../component/cards/Cards";
import ClientReview from "../../component/client review/ClientReview";
import Footer from "../../component/footer/Footer";
import Navber from "../../component/navber/Navber";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            
            {/* <Banner></Banner> */}
            <Achievment></Achievment>
            <Cards></Cards>
            <Banner2></Banner2>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;