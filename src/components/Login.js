import Header from "./Header"
import { useState } from "react";

const Login=()=>{
    const [isSignInForm,setisSignInForm]=useState(true);

   const toggleSignInForm = ()=>{
      setisSignInForm(!isSignInForm);//toggle feature
   };
    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg"
        alt="bg image"/>
        </div>
        <form className=" w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80 text-white absolute p-12  bg-black">
        <h1 className="font-bold text-2xl py-6">{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder="Full Name" className="mr-3 py-5 px-4 border h-2 border-gray-200 rounded bg-gray-700 mb-4  w-full"></input>)}
        <input type="text" placeholder="Email" className="mr-3 py-5 px-4 border h-2 border-gray-200 rounded bg-gray-700 mb-4  w-full"></input>
        <input type="password" placeholder="password" className="mr-3 py-5 px-4  h-2 border border-gray-200 bg-gray-700  rounded mb-4  w-full"></input>
        <button className="py-3 mt-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className="p-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Signup Now": "Already a User? Sign In "}</p>
        </form>
        </div>
    )
};
export default Login;