import checkValiddata from "../utils/validate";
import Header from "./Header"
import { useRef, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LoginBG } from "../utils/constants";
const Login=()=>{
    const [isSignInForm,setisSignInForm]=useState(true);
    const [errormsg,seterrormsg]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
   const name=useRef(null);
   
   const dispatch=useDispatch();
 
   const handleButtonClick=()=>{
   const message=checkValiddata(email.current.value,password.current.value);
   seterrormsg(message);
   if(message) return;//dont want the program to go forward
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value,
      }).then(() => {
        // Profile updated!
        // ...
        const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));

        
        
      }).catch((error) => {
        // An error occurred
        // ...
        seterrormsg(error.message);
      });
  
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrormsg(errorCode+" -"+ errorMessage);
      
      // ..
    });
  
  }
  else {
    // Sign In Logic
    signInWithEmailAndPassword(
      auth,
      email.current?.value,
      password.current?.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormsg(errorCode + "-" + errorMessage);
      });
  }
};
const toggleSignInForm = ()=>{
    setisSignInForm(!isSignInForm);//toggle feature
 };
    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src={LoginBG}
        alt="bg image"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80 text-white absolute p-12  bg-black">
        <h1 className="font-bold text-2xl py-6">{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input  type="text" placeholder="Full Name" className="mr-3 py-5 px-4 border h-2 border-gray-200 rounded bg-gray-700 mb-4  w-full"></input>)}
        <input ref={email} type="text" placeholder="Email" className="mr-3 py-5 px-4 border h-2 border-gray-200 rounded bg-gray-700 mb-4  w-full"></input>
        <input ref={password} type="password" placeholder="password" className="mr-3 py-5 px-4  h-2 border border-gray-200 bg-gray-700  rounded mb-4  w-full"></input>
        <p className="text-red-400 font-bold">{errormsg}</p>
        <button className="py-3 mt-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className="p-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Signup Now": "Already a User? Sign In "}</p>
        </form>
        </div>
    )
};
export default Login;