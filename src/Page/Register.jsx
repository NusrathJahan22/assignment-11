import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Routes/Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    // eslint-disable-next-line no-unused-vars
    const { signUp } = useContext(AuthContext)

    const googleLogin = useContext(AuthContext)
    const handelGoogle = () => {
        googleLogin().then((result => {
            console.log(result.user)
        }))
    }
    const handelRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        const register = (name, email, photo, password)
        console.log(register)

        signUp(email,password).then((result) => console.log(result.user));
        
            Swal.fire({
                title: 'success',
                text: 'successfully Register',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
    
    }
    return (
        <div>
            <p className='text-5xl text-center font-bold text-light-blue-600 '>Please Register</p>
            <form onSubmit={handelRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="Name" placeholder="Name" className="input input-bordered" required name="name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="photo" placeholder="photo" className="input input-bordered" required name="photo" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Do you have an account?</a>
                        <NavLink to='/login'>
                            <h2 className="text-light-blue-600 font-semibold">Login</h2>
                        </NavLink>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-light-blue-600 text-white">Register</button>
                </div>
                <button onClick={handelGoogle} className="btn bg-blue-gray-100 w-full"><img src="https://i.ibb.co/8cDBLn5/google-2.png" alt="" className="w-10 h-10 mx-auto" /></button>
            </form>
        </div>
    );
};

export default Register;