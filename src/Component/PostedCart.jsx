
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PostedCart = ({posted}) => {

    const { _id,jobtitle, minimumprice, description, maximamprice, email, deadline } = posted
    console.log(posted)

    const handelDelete=(_id) =>{
        fetch(`https://assignment-11-server-teal-ten.vercel.app/addjobs/${_id}`,{
            method:"DELETE",
        }) 
        .then((res) =>res.json())
        .then((data) =>{
            console.log(data)
            // if(acknowledged=true)
             Swal.fire({
          title: 'success',
          text: 'successfully Delete',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        })
    }

    

    return (
        
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{jobtitle}</h2>
                    <p>{description}</p>
                    <p>price range:{maximamprice}-{minimumprice}</p>
                    <p>Email:{email}</p>
                    <p>Deadline:{deadline}</p>
                    <div className="card-actions flex">
                       <Link to={`/update/${_id}`}>
                       <button className="btn bg-light-blue-400">Update Now</button>
                       </Link>
                        
                        <button onClick={()=> handelDelete(_id)} className="btn bg-light-blue-400">Delete </button>
                       
                    </div>
                </div>
            </div>
       
    );
};

export default PostedCart;