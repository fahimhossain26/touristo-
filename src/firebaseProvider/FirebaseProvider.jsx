import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
///social auth provvider
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const[user,setUser]=useState(null);
    // console.log(user);

const [loading,setLoading]=useState(true);
// console.log(loading);



// Create Ussr 
const createUser=(email,password)=>{
    setLoading(true);
 return createUserWithEmailAndPassword(auth,email,password);
};

//update User profile 
const updateUserProfile=(name,image)=>{
   return updateProfile(auth.currentUser, {
        displayName: name,
         photoURL: image,
       
      })
}
//sign in user

const signInUser=(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};


//google login 
const googleLogIn=()=>{
    setLoading(true);
return signInWithPopup(auth, googleProvider);
};
//github  login
const githubLogin=()=>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
}

// logout
const logout=()=>{
    setUser(null);
    signOut(auth);
    
};



// //send reset password request 
// const resetPass=(email)=>{
//     return sendPasswordResetEmail(auth, email);
// }



//observer 
useEffect(()=>{

   const unsubscribe= onAuthStateChanged(auth, (user) => {
        // if (user) {
        //   setUser(user);
        //    setLoading(false);
        // }
        setUser(user);
        setLoading(false); 
      });
      return ()=>unsubscribe();
},[]);


    const allValues={

        createUser,
        signInUser,
        googleLogIn,
        githubLogin,
        logout,
        user,
         loading,
        updateUserProfile,
        // resetPass
        
    }
    return (
    
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>

    );
};

export default FirebaseProvider;