import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";





const Main = () => {
    return (
        <div>
       <div>
       <Header></Header>
            <Outlet></Outlet>
       </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;