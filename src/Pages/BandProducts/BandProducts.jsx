import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";





const BandProducts = () => {
  
    const bandProducts = useLoaderData();
    console.log(bandProducts)
    

    return (
        <div className="m-20">
          <h1 className="text-3xl font-extrabold text-center">Our Popular Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {
                bandProducts.map(bandProduct =><ProductCard key={bandProduct._id} bandProduct={bandProduct}></ProductCard>)
            }
          </div>
        </div>
    );
};

export default BandProducts;