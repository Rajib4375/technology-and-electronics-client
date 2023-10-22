import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";





const BandProducts = () => {
  
    const bandProducts = useLoaderData();
    console.log(bandProducts)
    

    return (
        <div className="m-20 ">
          <h1 className="text-3xl font-extrabold text-center">Our Popular Products</h1>
          <div>
          <div className="carousel w-full mt-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/JqF799N/salider.jpg" className=" lg:w-full lg:h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qd4sJKq/appleproducts-variety-white-860x370-2-0.png" className="lg:w-full lg:h-[600px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/q0WdYYf/Felix-3-D-Printer-Printing-Set-up-With-Examples.jpg" className="lg:w-full lg:h-[600px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/HptHdpc/slidar.webp" className="lg:w-full lg:h-[600px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {
                bandProducts.map(bandProduct =><ProductCard key={bandProduct._id} bandProduct={bandProduct}></ProductCard>)
            }
          </div>
        </div>
    );
};

export default BandProducts;