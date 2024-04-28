import UseAuth from "../../hooks/UseAuth";
import {Navigate ,useLocation}  from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth();
    const location=useLocation();
     console.log(location);

 if(loading){
    return <div className="w-12 h-12  animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600  mt-32 mx-auto"></div>
   
 }




    if(!user){
        return <Navigate to={'/login'} state={location ?.pathname || '/'} ></Navigate>
    }
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRoute;
