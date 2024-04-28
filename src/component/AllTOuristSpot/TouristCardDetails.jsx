import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristCardDetails = () => {
    const TouristCards= useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const touristSpots=TouristCards.find(touristSpot=>touristSpot._id==idInt)
    const {tourisSptName}=touristSpots;
    return (
        <div>
             <h2 className="card-title text-orange-600 font-mono text-2xl mx-auto">{tourisSptName}</h2>

        </div>
    );
};

export default TouristCardDetails;