
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Routes/Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)


  console.log(user)
  const handelLogout = () => {
    logout().then()
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="">

            <img src="https://i.ibb.co/fvFntrW/logo-5.jpg" alt="" className="w-40 h-30" />
            {/* <p className="btn btn-ghost normal-case text-xl">Web Development</p> */}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addJob"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                Add job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/postJob"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                My posted jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myBids"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                My Bids
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bidsRequest"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                Bid Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && <button onClick={handelLogout} className="btn bg-light-blue-700">logout</button>}
          <p>{user?.email}</p>

          {/* <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-light-blue-800" : ""
                }
              >
                Login
              </NavLink>
            </li> */}
          {/* <a className="btn">Login</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
