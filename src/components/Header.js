import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
const Header=()=>{
 // const[issignOut,setissignOut]=useState(false);
 const dispatch=useDispatch();
  const navigate=useNavigate();
 const user =useSelector((store)=> store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      navigate("/error");
    });
    
  }
  useEffect(()=>{//called once when my comp loads
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          // ...
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
         navigate("/browse");
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
         
        }
      });
      //unsubscribe when my component unmounts
      return ()=> unsubscribe();

},[]);
    return (
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between"> 
      <img className="w-44" src={LOGO}
      alt ="logo"/>
     {user && (
      <div className="flex p-2">
        <img  className="w-12 h-12 "alt="usericon" src={USER_AVATAR}/>
      <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
      </div>)}
      </div>
    )
}
export default Header; 