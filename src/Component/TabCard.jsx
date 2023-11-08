/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";


const TabCard = ({ cart }) => {
    const { _id,jobtitle, minimumprice, deadline, description, maximamprice, email, Category } = cart
    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-light-blue-500">{jobtitle}</h2>
                    <p>{description}</p>
                    <p className="font-bold text-light-blue-500">{Category}</p>
                    <div className="flex">
                        <p>Deadline :{deadline}</p>
                        <p>Price range:{maximamprice}-{minimumprice}</p>
                    </div>


                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-light-blue-500">Bid Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;