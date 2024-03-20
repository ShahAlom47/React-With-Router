import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    const Location = useLocation()
    const navigation = useNavigation();


    console.log(Location);

    return (

        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'Loading' ? <p className="text-3xl"> Loading...</p> : <Outlet></Outlet>
            }

            <Footer></Footer>
            <h1>This is the Home Components</h1>
        </div>
    );
};

export default Home;