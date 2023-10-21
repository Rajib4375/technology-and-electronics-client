import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";

const Login = () => {

    const {SignIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        
        SignIn(email, password)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Login Successfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error =>{
            console.log(error)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Try Again ! password and email does not match',
                showConfirmButton: false,
                timer: 1500
              })
        })



    }

    return (
        <div>
            <h2 className="text-3xl font-bold my-10 text-center">Plese Login</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:h-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;