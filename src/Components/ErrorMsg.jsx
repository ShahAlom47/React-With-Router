import { NavLink,  useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);


  return (
    <div id="error-page" className="flex flex-col justify- text-center py-9">
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink to={'/'}> <button className="btn btn-outline my-6" >Home</button> </NavLink>
    </div>
  );
}