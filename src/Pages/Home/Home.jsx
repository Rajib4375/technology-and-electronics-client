import { useLoaderData } from "react-router-dom";
import Bands from "../../components/Bands/Bands";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {
  
    const bands = useLoaderData();
    

    return (
        <div>
           <Banner></Banner>
           <Bands bands={bands}></Bands>
        </div>
    );
};

export default Home;