import React, { useEffect } from 'react';
import Navber from '../navber/Navber';
import UseAuth from '../../hooks/UseAuth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateProfile = () => {
  

    const navigate = useNavigate()
    
    const { updateUserProfile } = UseAuth();

    const { register, handleSubmit, formState: { errors },} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const {photoUrl,name} = data;

    //   updateUserProfile(name, photoUrl)


      updateUserProfile(name, photoUrl)
      .then(()=>{
              navigate(from) 
        
      })
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: " Register Successfully ",
        showConfirmButton: false,
        timer: 1500,
       

      })

      
     
     

    }

    return (
        <div>
            <Navber></Navber>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col">
                 <h2 className='text-4xl font-serif mb-10'>Update Your Profile  </h2>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required  {...register("name")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="photoUrl" className="input input-bordered" required   {...register("photoUrl")} />

                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary hover:bg-violet-800">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;