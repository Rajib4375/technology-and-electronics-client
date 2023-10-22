/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({bandProduct}) => {
 
 
    const {_id, name, category, image, price,  band_name } = bandProduct;
     

    return (
      <div>
        <div className="card lg:card-side bg-[#F4F3F0] shadow-xl p-6">
  <figure><img className="w-[200px] h-[220px]" src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Band Name:{band_name}</h2>
    <p>Name:{name}</p>
    
    <p>Type:{category}</p>
    <p>price :{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/products/${_id}`}><button className="btn  bg-[#D2B48C] text-[#331A15]">Update </button></Link>
      <Link to={`/detail/${_id}`}><button className="btn  bg-[#D2B48C] text-[#331A15]">Details </button></Link>
    </div>
  </div>
</div> 
   
      </div>
    );
};

export default ProductCard; 