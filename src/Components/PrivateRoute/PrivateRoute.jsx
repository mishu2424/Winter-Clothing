import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log(loading);

    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner> 
    }

    if(user){
        return children;
    }

    return <Navigate state={location?.pathname && location.pathname} to='/auth/login'></Navigate>;
};

export default PrivateRoute;