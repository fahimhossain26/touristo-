import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../component/login/Login";
import Register from "../component/register/Register";
import CardDetails from "../component/cardDetails/CardDetails";
import Error from "../component/error/Error";
import { PiSquareSplitVerticalDuotone } from "react-icons/pi";
import PrivateRoute from "../component/privateRoute/PrivateRoute";
import About from "../component/about/About";
import UserProfile from "../component/privateRoute/UserProfile";
import Contact from "../component/contact/Contact";
import UpdateProfile from "../component/updateProfile/UpdateProfile";
import UpdateTuristSpot from "../component/updateTuristSpot/UpdateTuristSpot";
import AllTouristSpot from "../component/AllTOuristSpot/AllTouristSpot";
import TouristCardDetails from "../component/AllTOuristSpot/TouristCardDetails";
import UpdadeSinleSpot from "../component/updateTuristSpot/UpdadeSinleSpot";

const routs = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            // {
            //     path: '/updateProfile',
            //     element: <UpdateProfile></UpdateProfile>
            // },
            { 

                path:'/allTouristSpot',
                element:<AllTouristSpot></AllTouristSpot>,
                loader:()=> fetch('http://localhost:5000/touristSpot')
            },
            {
               path: '/touristCardDetails/:id',
               element:<TouristCardDetails></TouristCardDetails>,
               loader:()=>fetch('http://localhost:5000/touristSpot')
            },

            {
                path: '/cardDetails/:id',
                element: <PrivateRoute>
                    <CardDetails></CardDetails>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/travels')
            },
            {
                path: '/userProfile',
                element: <PrivateRoute>
                    <UserProfile></UserProfile>
                </PrivateRoute>
            },
            // {
            //     path:'/updateProfile',
            //     element:<PrivateRoute>
            //         <UpdateProfile></UpdateProfile>
            //     </PrivateRoute>
            // },
            {
                path:'/addTuristSpot',
                element:<PrivateRoute>
                    <UpdateTuristSpot></UpdateTuristSpot>
                </PrivateRoute>
            },
            {
            path:'/updateSingleSpot/:id',
            element: <UpdadeSinleSpot></UpdadeSinleSpot>,
            // <PrivateRoute>
        //      <UpdadeSinleSpot></UpdadeSinleSpot>
        // </PrivateRoute>,

        loader:({params})=>fetch(`http://localhost:5000/touristSpot/${params.id}`),
           


            }
        
        ]
    }
]);
export default routs;