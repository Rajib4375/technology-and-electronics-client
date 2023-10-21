import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Addproducts from "../Pages/AddProducts/Addproducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";

import BandProducts from "../Pages/BandProducts/BandProducts";
import ProductUpdate from "../components/ProductUpdate/ProductUpdate";
import Register from "../Pages/Register/Register";



const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        
         
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/technology.json')
            },
            {
                path:"/addProduct",
                element:<Addproducts></Addproducts>
            },
            {
                path:"/myCart",
                element:<MyCart></MyCart>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path:"/bands/:brandName",
                element:<BandProducts></BandProducts>,
                loader:({params}) =>fetch(`http://localhost:5000/bands/${params.brandName}`)  
            },
            {
                path:'/products/:id',
                element:<ProductUpdate></ProductUpdate>,
                loader:({params}) =>fetch(`http://localhost:5000/products/${params.id}`)
               
            }
            
        ]
    }
])

export default myCreatedRoute;