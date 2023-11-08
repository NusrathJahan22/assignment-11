import { useLoaderData } from "react-router-dom";
import MyBidCart from "../Component/MyBidCart";

const MyBids = () => {
    const myBids = useLoaderData()
    console.log(myBids)
    // const { email, price, deadline, buyeremail } = myBids
    return (
        <div>
            {
                myBids.map((myBid) =>(
                  <MyBidCart key={myBid.id} myBid={myBid}></MyBidCart>  
                ))
            }
        </div>
    );
};

export default MyBids;