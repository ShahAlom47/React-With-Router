import { useLoaderData } from "react-router-dom";




const UserDetails = () => {
    const userDitails = useLoaderData();
    const {street,city,zipcode}=userDitails.address
    return (
        <div className="text-center p-4 bg-slate-400">
            <h1>User details</h1>
            <p>Street : {street}</p>
            <p>City : {city}</p>
            <p>Zip Code : {zipcode}</p>
        </div>
    );
};

export default UserDetails;