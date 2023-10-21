import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
 
  const handleSIgnOut = () =>{
    logOut()
     .then()
     .catch()
  }

    return (
        <div className="navbar bg-base-100 py-5 shadow-md px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
      to="/"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
     Home
   </NavLink>
   <NavLink
      to="/addProduct"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
     Add Product
   </NavLink>
   <NavLink
      to="/myCart"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
     My Cart
   </NavLink>
   <NavLink
      to="/login"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
    Login
   </NavLink>
      </ul>
    </div>
    
    <img className="w-[110px] h-[60px] rounded-lg  " src="https://i.ibb.co/PjTcmkP/logo-5.jpg" alt="" />
    <a className="btn btn-ghost normal-case  text-3xl font-bold ">Technology & Electronics</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
    <NavLink
    to="/"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
    }
    >
     Home
    </NavLink>
    <NavLink
      to="/addProduct"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
     Add Product
   </NavLink>

   <NavLink
      to="/myCart"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
     My Cart
   </NavLink>
   <NavLink
      to="/login"
     className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-green-400 underline" : ""
     }
      >
    Login
   </NavLink>
    </ul>
  </div>
  <div className="navbar-end">

    {
      user ?
      <a onClick={handleSIgnOut} className="btn">Sign Out</a>
      :
      <Link to="/login">
     <a className="btn">Login</a>
     </Link>

    }
   
  </div>
</div>
    );
};

export default Navbar;