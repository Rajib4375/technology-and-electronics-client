import { useEffect, useState } from "react";
import AddproductCart from "../../components/AddproductCart/AddproductCart";


const MyCart = () => {
  
    const [cartitems, setCartitems] = useState([])
    const [noDataFound, setNoDataFound] = useState(false)

    useEffect(()=>{
        const addToCartitem = JSON.parse(localStorage.getItem('cartItems'))
        if(addToCartitem){
            setCartitems(addToCartitem)
        }
        else{
           
            setNoDataFound('No Data Found !!!')
        }
    },[])
  
    return (
        <div className="mt-10">
           {
             noDataFound ? <p className="text-5xl font-extrabold  text-blue-500 h-[80vh] flex justify-center items-center">{noDataFound}</p> : 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                   cartitems.map(product =><AddproductCart 
                    key={product._id}
                     product={product}
                     
                     ></AddproductCart>)
                }
             </div>
           }
        </div>
    );
};

export default MyCart;