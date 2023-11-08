
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const detail = useLoaderData()
        console.log(detail)
        const { jobtitle, minimumprice, description, maximamprice, email,deadline } = detail

    const handelDetails = e => {
        e.preventDefault();
        const form = e.target
        const price = form.price.value
        const email = form.email.value
        const jobtitle = form.jobtitle.value
        const buyeremail = form.buyeremail.value
        const deadline = form.deadline.value
        const formDetails = { price, email, buyeremail, deadline,jobtitle }
        console.log(formDetails)

        fetch(`http://localhost:5000/formdetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDetails)
        })
            .then((res => res.json()))
            .then((data) => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
}
        return (

            <div>
                <div className=" flex justify-center items-center">

                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight  dark:text-white text-light-blue-800">{jobtitle}</h5>
                            <div className="">
                                <h2 className="text-3xl">Deadline :{deadline}</h2>
                                <h2 className="text-3xl">Price Range:{maximamprice}-{minimumprice}</h2>
                            </div>
                            <h2 className="text-3xl">E-mail: {email}</h2>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                        </div>
                    </a>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-center text-light-blue-500 mt-3">Place your Bid</h3>
                    <form onSubmit={handelDetails} className='md:w-3/4 lg:w-1/2 mx-auto text-bold'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">JobTitle</span>
                            </label>
                            <input type="text" placeholder="jobTitle" className="input input-bordered" required name="jobtitle" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required name="buyeremail" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" className="input input-bordered" required name="price" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="text" placeholder="Deadline" className="input input-bordered" required name="deadline" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-light-blue-600 text-white">Project</button>
                        </div>

                    </form>
                </div>

            </div>

        );
    };


export default Details;



