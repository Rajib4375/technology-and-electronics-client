/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const AddproductCart = ({product}) => {
    const {_id, name, category, image, price,  band_name,description } = product;

     const handleDelete = _id =>{
       console.log(_id)
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(`http://localhost:5000/products/${_id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
               Swal.fire(
                 'Deleted!',
                 'Your product has been deleted.',
                 'success'
          )
             
             
            }
          })
        }
      })
     }
   

    return (
        <div className="card w-96 h-[600px] glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Band Name: {band_name}</h2>
    <p>Name: {name}</p>
    <p>Type: {category}</p>
    <p>Details: {description.slice(0,100)}</p>
    <p>price: {price}</p>
    <div className="card-actions justify-end">
      <button
      onClick={()=>handleDelete(_id)}
      className="btn btn-primary bg-red-500">X</button>
    </div>
  </div>
</div>
    );
};

export default AddproductCart;