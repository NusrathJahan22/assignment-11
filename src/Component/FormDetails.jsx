// import Swal from "sweetalert2";


// const FormDetails = () => {

//     const handelDetails = e => {
//         e.preventDefault();
//         const form = e.target
//         const price = form.price.value
//         const email = form.email.value
//         const buyeremail = form.buyeremail.value
//         const deadline = form.deadline.value
//         const formDetails = { price, email, buyeremail, deadline }
//         console.log(formDetails)

//         fetch(`http://localhost:5000/formdetails`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formDetails)
//         })
//             .then((res => res.json()))
//             .then((data) => {
//                 // console.log(data)
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: "Good job!",
//                         text: "You clicked the button!",
//                         icon: "success"
//                     });
//                 }
//             })
//             .catch(() => {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Do you want to continue',
//                     icon: 'error',
//                     confirmButtonText: 'Cool'
//                 })
//             })
//         }

//     return (
//         <div>
//         <h3 className="text-3xl font-bold text-center text-light-blue-500 mt-3">Place your Bid</h3>
//         <form onSubmit={handelDetails} className='md:w-3/4 lg:w-1/2 mx-auto text-bold'>

//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" placeholder="email" className="input input-bordered" required name="bideremail" />
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Buyer Email</span>
//                 </label>
//                 <input type="email" placeholder="email" className="input input-bordered" required name="buyeremail" />
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Price</span>
//                 </label>
//                 <input type="text" placeholder="price" className="input input-bordered" required name="price" />
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Deadline</span>
//                 </label>
//                 <input type="text" placeholder="Deadline" className="input input-bordered" required name="deadline" />
//             </div>
//             <div className="form-control mt-6">
//                 <button className="btn bg-light-blue-600 text-white">Project</button>
//             </div>

//         </form>
//     </div>
//     );
// };

// export default FormDetails;