// import { Link } from "react-router-dom";


const PostedCart = (posted) => {

    const { _id,jobtitle, minimumprice, description, maximamprice, email, deadline } = posted
    console.log(posted)

    // fetch(`http://localhost:5000/addjobs/${_id}`,{
    //     method:"DELETE",
    // }) 
    // .then((res) =>res.json())
    // .then((data) =>{
    //     console.log(data)
    // })

    return (
        
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{jobtitle}</h2>
                    <p>{description}</p>
                    <p>price range:{maximamprice}-{minimumprice}</p>
                    <p>Email:{email}</p>
                    <p>Deadline:{deadline}</p>
                    <div className="card-actions flex">
                        <button className="btn bg-light-blue-400">Update Now</button>
                        {/* <Link to={}> */}
                        <button className="btn bg-light-blue-400">Delete </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
       
    );
};

export default PostedCart;