// import React, { useState } from 'react';
// import UseAuth from "../../hooks/UseAuth";

// const PassRsetModal = () => {
//   const {resetPass}=UseAuth();
//     const [email,setEmail]=useState('');
//     const handelSubmit=()=>{
//       resetPass(email)
//        .then((res)=>{
//         console.log(res);
//        })
        

//     }
//     return (
//         <div>
            
//             {/* Open the modal using document.getElementById('ID').showModal() method */}

//             <p className="text-sm mt-6 flex gap-2">
//        Did you <a onClick={()=>document.getElementById('my_modal_2').showModal()} className="text-blue-600" href="#"> forget your password? </a>
//     </p>

// <dialog id="my_modal_2" className="modal ">
//   <div  className="modal-box  flex flex-col gap-5">
//     <input  type="text"  onChange={(e)=>setEmail(e.target.value)} className="input input-bordered input-primary w-full mx-auto" />
//     <button  onClick={handelSubmit}  className='btn btn-primary'>submit</button>
//   </div>
//   <form method="dialog" className="modal-backdrop">
//     <button className='btn btn-warning' >close</button>
//   </form>
// </dialog>

//         </div>
//     );
// };

// export default PassRsetModal;