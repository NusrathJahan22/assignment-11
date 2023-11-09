import Lottie from "lottie-react";
import ErrorAnimation from "../assets/Animation - 1699510981979.json";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
           <Lottie animation={ErrorAnimation}></Lottie>
           <Link to="/">Go To Home</Link>
        </div>
    );
};

export default Error;