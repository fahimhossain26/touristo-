

// const TouristCard = ({touristSpot}) => {
//     return (
//         <div>
//             <div className="card card-compact w-96 bg-base-100 shadow-xl">
//   <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default TouristCard;


import { MdSupervisedUserCircle } from "react-icons/md";

import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



import Aos from "aos";
import 'aos/dist/aos.css'

import { useEffect } from "react";

const TouristCard = ({touristSpot}) => {

    const {_id,tourisSptName, photoUrl,description,cost,visitorCount,visitingTime,
        travelTime}=touristSpot;

        const handelDelete=_id=>{
console.log(_id);

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
    fetch(`http://localhost:5000/touristSpot/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        Swal.fire({
             title: "Deleted!",
            text: "Your file has been deleted.",
             icon: "success"
           });
      }
    })
  }
});

        }

    useEffect(()=>{
      Aos.init({duration:3000});
  })
    return (
      
        <div>
            
           <div className="card card-compact  bg-blue-100 shadow-xl"  data-aos="zoom-in">
  <figure><img  className="h-72" src={photoUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-orange-600 font-mono text-2xl mx-auto">{tourisSptName}</h2>
    <p>{description}</p>
    <p className="flex items-center gap-2 font-bold">  <span className="text-4xl"><MdSupervisedUserCircle  /></span>  total visitors per year  :{visitorCount}</p>
    <div className="flex justify-between mt-3">
    <div className="card-actions justify-start">
    {/* <Link to={`/touristCardDetails/${_id}`}>   <button className="btn  bg-orange-400 ">View Details</button></Link> */}
    </div>
    <div> <p className="font-bold text-xl"> Price : {cost}</p> </div>
    </div>
    <div className="flex gap-5">
        <button className="btn">view </button>
        <button className="btn">Edit</button>
        <button 
        onClick={()=>handelDelete(_id)}
        className="btn bg-red-500">X</button>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default TouristCard;