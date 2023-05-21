import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Subcategory from "../Subcatrgory/Subcategory";


const Home = () => {
    return (
        <div>
            <Helmet><title>EduLerToys/Home Page</title></Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Subcategory></Subcategory>
        </div>
    );
};

export default Home;