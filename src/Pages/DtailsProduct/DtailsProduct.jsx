import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const DtailsProduct = () => {
   
    const bandProducts = useLoaderData();
    
    const { name, category, image, price, description, band_name,} = bandProducts;

    const handleAddCart = () =>{
 
        const addedCartItemArray=[];

        const addToCartitem = JSON.parse(localStorage.getItem('cartItems'))
        if(!addToCartitem){
            addedCartItemArray.push(bandProducts)
            localStorage.setItem('cartItems', JSON.stringify(addedCartItemArray))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
   
        }
        else{
            addedCartItemArray.push(...addToCartitem,bandProducts)
            localStorage.setItem('cartItems', JSON.stringify(addedCartItemArray))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })

        }
    }
    

    return (
        <div className="flex justify-center h-screen mt-10">
            <div className="card w-96 h-[700px] bg-stone-300 shadow-xl p-5">
     <figure><img src={image}/></figure>
     <div className="card-body">
     <h2 className="card-title text-[#0052FF]">Band name: {band_name}</h2>
     <p className="text-[#0052FF]">Name: {name}</p>
     <p className="text-[#0052FF]">Type: {category}</p>
     <p className="text-[#0052FF]">Details: {description}</p>
     <p className="text-[#0052FF]">Price: {price}</p>
     <div className="card-actions justify-end">
      <button onClick={handleAddCart} className="btn btn-primary bg-amber-800">Add to Cart</button>
      </div>
     </div>
     </div>
        </div>
    );
};

export default DtailsProduct;