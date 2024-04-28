import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristCardDetails = () => {
    const TouristCard= useLoaderData();
    const {_id}=useParams();
    const idInt=parseInt(_id);
    const touristSpots=touristSpots.find(touristSpot=>touristSpot.id==idInt)
    const {tourisSptName}=TouristCard;
    return (
        <div>
             <h2 className="card-title text-orange-600 font-mono text-2xl mx-auto">{tourisSptName}</h2>

        </div>
    );
};

export default TouristCardDetails;