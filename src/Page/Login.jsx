import { useContext } from "react";
import { AuthContext } from "../Routes/Provider/AuthProvider";
import { NavLink } from "react-router-dom";

// const{googleLogin} = useContext(AuthContext)
const Login = () => {
  const { googleLogin, signIn } = useContext(AuthContext)

  const handelGoogle = () => {
    googleLogin().then((result => {
      console.log(result.user)
    }))

  }
  const handelLogin = (e) => {
    e.preventDefault()

    if((email,password)){
      signIn(email.password).then((result) => {
        console.log(result.user)
      })
        .catch((err) => {
          console.log(err.massage);
        })
    }

    const form = e.target
    const password = form.password.value
    const email = form.email.value
    const login = { password, email }
    console.log(login)

    
      
  }
  return (
    <div className="w-1/2 mx-auto">
      <p className='text-5xl text-center font-bold text-light-blue-600 '>Please Login</p>
      <form onSubmit={handelLogin} className="card-body md:3/4 lg:1/2">
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
          <NavLink to='/register'>
            <h2 className="text-light-blue-600 font-semibold">Register</h2>
          </NavLink>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-light-blue-800">Login</button>
        </div>
        <button onClick={handelGoogle} className="btn bg-blue-gray-100"><img src="https://i.ibb.co/8cDBLn5/google-2.png" alt="" className="w-10 h-10 mx-auto" /></button>
      </form>
    </div>


  );
};

export default Login;