import { useParams } from "react-router-dom";


const Delete = () => {
    const {_id} = useParams()
    fetch(`http://localhost:5000/addjobs/${_id}`,{
        method:"DELETE",
    }) 
    .then((res) =>res.json())
    .then((data) =>{
        console.log(data)
    })

    return (
        <div>
            
        </div>
    );
};

export default Delete;