import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Addproducts from "../Pages/AddProducts/Addproducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
         
        children:[
            {
                path:"/",
                element:<Home></Home>
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
            }
        ]
    }
])

export default myCreatedRoute;