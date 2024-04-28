
import { MdSupervisedUserCircle } from "react-icons/md";

import { Link } from "react-router-dom";


import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Card = ({card}) => {

    const {id,tourists_spot_name, description ,average_cost,image,total_visitors_per_year}=card;

    useEffect(()=>{
      Aos.init({duration:3000});
  })
    return (
        <div>
           <div className="card card-compact  bg-blue-100 shadow-xl"  data-aos="flip-down">
  <figure><img  className="h-72" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-orange-600 font-mono text-2xl mx-auto">{tourists_spot_name}</h2>
    <p>{description}</p>
    <p className="flex items-center gap-2 font-bold">  <span className="text-4xl"><MdSupervisedUserCircle  /></span>  total visitors per year  :{total_visitors_per_year}</p>
    <div className="flex justify-between mt-3">
    <div className="card-actions justify-start">
    <Link to={`/cardDetails/${id}`}>   <button className="btn  bg-orange-400 ">View Details</button></Link>
    </div>
    <div> <p className="font-bold text-xl"> Price : {average_cost}</p> </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Card;