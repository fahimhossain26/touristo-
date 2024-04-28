import {useLoaderData,useParams}  from "react-router-dom";

import { MdSupervisedUserCircle } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiShape2Line } from "react-icons/ri";
import Navber from "../navber/Navber";
import Footer from "../footer/Footer";

const CardDetails = () => {
    const cards= useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const card=cards.find(card=>card.id==idInt)
    // console.log(card,id);
    const {tourists_spot_name ,total_visitors_per_year,average_cost, travel_time,seasonality, description, image}=card;
    return (
       
        <div>
             <Navber></Navber>

            <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
  <figure className="w-full"><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl mb-5 uppercase ">{tourists_spot_name}</h2>
    <p>{description}</p>
  
    <p className="flex items-center gap-2 text-xl"> <span><FaMapLocationDot /></span> Visiting Place: {seasonality}</p>
 

    <p className="flex items-center gap-2 text-xl">  <span><CiTimer/></span> Travel time :{travel_time}</p>
     <p className="flex items-center gap-2 text-xl"> <span><MdSupervisedUserCircle />  </span> visitor per year :  {total_visitors_per_year}</p>

    <div > <p className="font-bold text-xl"> Average cost : {average_cost}</p> </div>
    {/* <div className="card-actions justify-end">
        
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>

<Footer></Footer>
        </div>
        
    );
};


export default CardDetails;