import { useLoaderData, useNavigate, useParams } from "react-router-dom";




const UserDetails = () => {
    const userDitails = useLoaderData();
    const {street,city,zipcode}=userDitails.address
    const navigate =useNavigate()

const backhndel =()=>{

navigate(-1)

}

const userId= useParams()
console.log(userId.userId);

    return (
        <div className="text-center p-4 bg-slate-400">
            <h1>User details</h1>
            <p>Street : {street}</p>
            <p>City : {city}</p>
            <p>Zip Code : {zipcode}</p>
            <button onClick={()=>backhndel()} className="btn btn-ghost" > Go Back</button>
        </div>
    );
};

export default UserDetails;