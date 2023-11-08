import { useLoaderData } from "react-router-dom";
import PostedCart from "../Component/PostedCart";


const PostJob = () =>{
    const postJob= useLoaderData()
    console.log(postJob)
    return (
        <div className="grid grid-clos-1 lg:grid-cols-3 gap-3 p-3">
          {
            postJob.map((posted) =>(<PostedCart key={posted.id} posted={posted}></PostedCart>))
          } 
        </div>
    );
};
export default PostJob;