




const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target
        const jobtitle = form.jobtitle.value
        const email = form.email.value
        const minimumprice = form.minimumprice.value
        const deadline = form.deadline.value
        const Category = form.Category.value

        const description = form.description.value
        const maximamprice = form.maximamprice.value

        const AddJob = { jobtitle, minimumprice, deadline, description, maximamprice, email, Category }
        console.log(AddJob)


        fetch(`https://assignment-11-server-teal-ten.vercel.app/addjobs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(AddJob)
                

        })
        .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
    }
    return (
        <div>
            <p className='text-5xl text-center font-bold text-light-blue-600 '>Please Add Job</p>
            
            <form onSubmit={handleAddJob} className='md:w-3/4 lg:w-1/2 mx-auto text-bold'>
                <div className="form-control">


                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" className="input input-bordered" required name="jobtitle" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="text" placeholder="Deadline" className="input input-bordered" required name="deadline" />
                </div>

                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="">
                        <select name="Category" required className="select  w-full input input-bordered">
                            <option value="web-development">Web Development</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="graphics-design">Graphics Design</option>
                        </select>
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum price</span>
                    </label>
                    <input type="text" placeholder="Minimum price" className="input input-bordered" required name="minimumprice" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Maximum price</span>
                    </label>
                    <input type="text" placeholder="Maximum price" className="input input-bordered" required name="maximamprice" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" className="input input-bordered" required name="description" />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-light-blue-600 text-white">Added Job</button>
                </div>

            </form>
        </div>
    );
};

export default AddJob;