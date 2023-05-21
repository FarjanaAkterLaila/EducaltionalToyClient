import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Offer from "../Componant/Offer/Offer";
import { Helmet } from "react-helmet";



const Main = () => {
    return (
        <div>
            <Helmet><title>EduLerToys</title></Helmet>
       <div>
       <Header></Header>
            <Outlet></Outlet> 
            <ToastContainer />
       </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;