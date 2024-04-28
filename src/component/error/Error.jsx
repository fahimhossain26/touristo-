import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center mt-20">
            <h2 className="text-6xl font-bold" >Oppps !!!</h2>
            <div className="flex justify-center items-center mt-10">
                <img className="w-96 " src="https://i.postimg.cc/ZKRfnkyK/search-1013910-1280.webp" alt="" />
                <p className="text-2xl font-bold ">We cant't find this page</p>
                
            </div>
           <Link to={'/'}><button className="btn btn-success text-xl">GO Back Home</button></Link>
        </div>
    );
};

export default Error;