import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from '../All tourist card/TouristCard';
import Navber from "../navber/Navber";
const AllTouristSpot = () => {

    const touristSpots=useLoaderData()
    return (
        <div>
            <Navber></Navber>
            <h3>all torist spot here</h3>
            <h2>total {touristSpots.length}</h2>


            <div className="grid md:grid-cols-3  gap-10 ">
            {
                touristSpots.map(touristSpot=><TouristCard  key={touristSpot._id}
                    touristSpot={touristSpot}
                ></TouristCard>)
            }
            </div>
           
        </div>
    );
};

export default AllTouristSpot;