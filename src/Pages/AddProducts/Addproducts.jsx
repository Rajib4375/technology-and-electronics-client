import Swal from 'sweetalert2'

const Addproducts = () => {

   const handleAddProduct = event =>{
     event.preventDefault();

     const form = event.target;
     const name = form.name.value;
     const category = form.category.value;
     const image = form.image.value;
     const price = form.price.value;
     const description = form.description.value;
     const reating = form.reating.value;
     const band_name = form.band_name.value;

     const newProducts = {name, category, image, price, description, reating , band_name}
     console.log(newProducts)

    //  send data to the server
    fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
           'content-type' : 'application/json'
        },
        body:JSON.stringify(newProducts)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'User Added Sucessfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })

   }

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h2 className="text-3xl font-extrabold text-center">ADD a Product</h2>
            <form  onSubmit={handleAddProduct}>
                {/* name and category */}
                <div className="md:flex">
                <div className="form-control md:w-1/2 ">
                <label className="label">
               <span className="label-text">Product Name</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="product name" name="name" className="input input-bordered w-full" />
             </label>
             </div>

             <div className="form-control w-1/2 ml-4">
                <label className="label">
               <span className="label-text">Category</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="category" name="category" className="input input-bordered w-full"  />
             </label>
             </div>
                </div>
                 {/* image and price */}
                 <div className="md:flex">
                <div className="form-control md:w-1/2 ">
                <label className="label">
               <span className="label-text">Image</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="image url" name="image" className="input input-bordered w-full" />
             </label>
             </div>

             <div className="form-control w-1/2 ml-4">
                <label className="label">
               <span className="label-text">Price</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="price" name="price" className="input input-bordered w-full"  />
             </label>
             </div>
                </div>
                 {/* Short description Rating */}
                 <div className="md:flex">
                <div className="form-control md:w-1/2 ">
                <label className="label">
               <span className="label-text">Description</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="description" name="description" className="input input-bordered w-full" />
             </label>
             </div>

             <div className="form-control w-1/2 ml-4">
                <label className="label">
               <span className="label-text">Reating</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="Reating" name="reating" className="input input-bordered w-full"  />
             </label>
             </div>
             </div>
             <div className="form-control  ml-2 ">
                <label className="label">
               <span className="label-text">Brand Name</span>
               </label>
               <label className="input-group">
               <input type="text" placeholder="Brand Name" name="band_name" className="input input-bordered w-full" />
             </label>
             </div>
                <input type="submit" value="Add Product" className="btn btn-block mt-5 bg-lime-950" />
            </form>
        </div>
    );
};

export default Addproducts;