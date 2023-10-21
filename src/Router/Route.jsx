/* eslint-disable no-undef */
import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Addproducts from "../Pages/AddProducts/Addproducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";

import BandProducts from "../Pages/BandProducts/BandProducts";
import ProductUpdate from "../components/ProductUpdate/ProductUpdate";
import Register from "../Pages/Register/Register";
import DtailsProduct from "../Pages/DtailsProduct/DtailsProduct";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Errorpage/ErrorPage";



const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage> ,
        
         
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/technology.json')
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><Addproducts></Addproducts></PrivateRoute>
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
               
            },
            {
                path:'/detail/:id',
                element:<PrivateRoute><DtailsProduct></DtailsProduct></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
            
        ]
    }
])

export default myCreatedRoute;