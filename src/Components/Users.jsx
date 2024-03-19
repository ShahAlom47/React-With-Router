import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h1 className="text-center">Total User : {users.length}</h1>
            <div className=" bg-slate-500 m-10 grid gap-4 grid-cols-1 lg:grid-cols-3">
                {
                    users.map((User) => {
                        const xx = 
                            < div className = "card  bg-blue-100 shadow-xl" >
                                <div className="card-body">
                                    <h2 className="card-title">Name: {User.name}</h2>
                                    <p>Email : {User.email}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/users/${User.id}`}> <button className="btn btn-primary">Show Details</button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        
            return xx
                    })
                }

        </div>
            
        </div >
    );
};

export default Users;