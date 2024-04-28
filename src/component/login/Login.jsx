

import Navber from '../navber/Navber';
import { Link } from 'react-router-dom';
import {useNavigate,useLocation} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
// import PassRsetModal from '../passResetModal/PassRsetModal';
import { useState } from 'react';
import Swal from 'sweetalert2'


import { FaEye, FaEyeSlash } from "react-icons/fa6";


// import { CgLayoutGrid } from 'react-icons/cg';




const Login = () => {
  const {signInUser}=UseAuth()
  const {googleLogIn, githubLogin}=UseAuth()



   const [loginError, setLoginError]=useState('');
  
  const [showPass,setShowPass]=useState(false);





  //navigation sytem 
  const navigate=useNavigate()
  const location=useLocation()
  const from = location ?.state || "/";

  // console.log(location);
//social Login
const handelSocialLogin =socialProvider=>{
  socialProvider()
  .then(result=>{
    if(result.user){
      navigate(from)
    }

  });
}
  //react hook form
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    

    const {email,password }=data;
    signInUser(email,password)
    .then(result=>{
      if(result.user){
        navigate(from)
        
      }
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Login Successfully ",
        showConfirmButton: false,
        timer: 1500
      });


      

    })
    .catch(error=>{
      console.log(error);
      setLoginError(error.message);
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title:"opps",
        text: "Your email or password  is  wrong",
        showConfirmButton: false,
        timer: 1500
      });
    })
   }



  //tost
  // const notify = () =>{
    
  //     toast("Wow so easy!");
   
    
  


    return (

     
        <div>
            <div>   <Navber></Navber></div>

            
<div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
<div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
  <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
      {/* Left side form */}
    <h2 className="text-2xl font-bold mb-6">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 mb-4">
        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Email" type="text"  {...register("email", { required: true })}/>
        {errors.email && <span className='text-red-400'>This field is required</span>}
        {/* <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Password" type="password" {...register("password", { required: true })} />
        {errors.password && <span className='text-red-400'>This field is required</span>} */}


<div className='flex items-center justify-end relative'>
               <input type={showPass ? "text" :"password"}
                 name="password" 
                 id="password" 
                 placeholder="Password" 
                 className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " {...register("password",{required:true})}    />
                <span className='absolute mr-2' onClick={()=> setShowPass(!showPass)
                }>
                   {
                    showPass ?  <FaEye></FaEye>  : <FaEyeSlash />
                   } 
                </span>
               </div>
               {errors.password && <span className='text-red-400'>This field is required</span>}





      </div>
      <div className="flex items-center space-x-2 mb-6">
        {/* <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border  " /> */}
        {/* <label className="text-sm font-medium" htmlFor="keep-signed-in">
          Keep me signed in
        </label> */}
      </div>
      <button  className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-400 text-black hover:text-white hover:bg-blue-600 ">
        LOG IN
      </button>
     


      {
        loginError  && <p className='text-red-500'> <span className='font-bold'> Your email or password  is  wrong</span> <br />
        <span className='text-black'> Try  valid email & password</span>  </p> 
      }


    </form>
    {/* <PassRsetModal></PassRsetModal> */}
  </div>
  {/* Right side content */}
  <div className="w-full sm:w-1/2">
    <p className="text-sm mb-6">

      If you don&apos;t already have an account click the button below to create your account.
    </p>
    <Link to='/register'>
    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white hover:bg-orange-300 hover:text-black">
      CREATE ACCOUNT
    </button>
    </Link>
 
    <p className="text-center my-4">OR</p>
    <button
    onClick={()=> handelSocialLogin(googleLogIn)}
     className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-300 text-black hover:bg-blue-400">
      {/* <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white mr-2"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> </svg> */}
      <img src=" https://i.postimg.cc/C5NtjMxK/google-logo-png-google-sva-scholarship-20.png " className='mr-5 rounded-xl ' width={60} height={60} alt="" />

      SIGN IN WITH GOOGLE
    </button>
    <button 
    onClick={()=>handelSocialLogin(githubLogin)}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-300 text-black hover:bg-blue-400">
    
      <img src="https://i.postimg.cc/j58dZT5M/github-black-logo-icon-147128.png "  className='mr-5 ' width={28} height={28} alt="" />
      SIGN IN WITH GITHUB
    </button>
  </div>
</div>
</div> 

        </div>
    );
};

export default Login;




