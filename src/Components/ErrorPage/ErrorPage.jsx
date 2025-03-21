import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error= useRouteError();
    const navigate = useNavigate();

    const handleNavigateError=()=>{
        navigate('/');
    }
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="text-center h-fit space-y-4">
            <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
            <p className="text-gray-600">{error?.statusText || "The page does not exist."}</p>
            <button onClick={handleNavigateError} className="btn bg-red-700 text-white">Back to home</button>
        </div>
        </div>
    );
};

export default ErrorPage;