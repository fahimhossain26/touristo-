
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navber from '../navber/Navber';

const UpdadeSinleSpot = () => {
    const tourPlace =useLoaderData();
    const {_id,tourisSptName, photoUrl,description,cost,visitorCount,visitingTime,travelTime}=tourPlace;


        const handelTorePlacce = e => {
            e.preventDefault();
            const form = e.target;
    
            const tourisSptName = form.tourisSptName.value;
            const photoUrl = form.photoUrl.value;
            const description = form.description.value;
            const cost = form.cost.value;
            const visitorCount = form.visitorCount.value;
            const visitingTime = form.visitingTime.value;
            const travelTime = form.travelTime.value;
    
            const updatedTouristSpot = { tourisSptName, photoUrl, description, cost, visitorCount, visitingTime, travelTime };
            console.log(updatedTouristSpot);
    
            //send data to the  server 
            fetch(`http://localhost:5000/touristSpot/${_id}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedTouristSpot)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                       
                        Swal.fire({
                            // position: "top-end",
                            icon: "success",
                            title: "palce Updated  added successfully",
                            
                         
                        });
                        
                    }
                   
                })
        }
    

    return (
        
          
          <div >
            <Navber></Navber>
            {/* <h1 className='text-center mt-5 font-mono text-4xl mb-0'>Add Turist Sport  </h1> */}


            <div className=" px-24 py-3 border-2 ">
                <h1 className='text-center mt-5 font-mono text-4xl mb-0'>Update Turist Sport :{tourisSptName} </h1>
                <form onSubmit={handelTorePlacce}>
                    {/*  name  row */}
                    <div className=" md:flex  mb-4">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">TOurist Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="tourisSptName" defaultValue={tourisSptName} placeholder="TOurist Spot Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="photoUrl"
                                    className="input input-bordered  w-full" />
                            </label>
                        </div>

                    </div>
                    {/* supplier  row */}
                    <div className=" md:flex mb-4">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description"  defaultValue={description} placeholder="description"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4" >
                            <label className="label">
                                <span className="label-text">cost </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cost" defaultValue={cost} placeholder="cost"
                                    className="input input-bordered  w-full " />
                            </label>
                        </div>

                    </div>
                    {/* catagory and details  row */}
                    <div className=" md:flex mb-4">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">visitor count </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="visitorCount" defaultValue={visitorCount} placeholder="visitorCount"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Visiting Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="visitingTime" defaultValue={visitingTime} placeholder="summer / winter"
                                    className="input input-bordered  w-full" />
                            </label>
                        </div>

                    </div>

                    {/* from photo url   row */}
                    <div className="mb-4" >

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travelTime" defaultValue={travelTime} placeholder="travel Time"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* <button className="btn btn-block">block</button> */}
                  
                    <input   type="submit" value=" Update Place " className="btn btn-block bg-blue-400" />
                </form>
            </div>


        </div>


       
    );
};

export default UpdadeSinleSpot;