import { useLoaderData } from "react-router-dom";
import Bands from "../../components/Bands/Bands";
import Banner from "../../components/Header/Banner/Banner";
import Fotter from "../../components/Fotter/Fotter";


const Home = () => {
  
    const bands = useLoaderData();
    

    return (
        <div>
           <Banner></Banner>
           <Bands bands={bands}></Bands>
           <Fotter></Fotter>
        </div>
    );
};

export default Home;