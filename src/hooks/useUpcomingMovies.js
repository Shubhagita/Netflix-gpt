import { useDispatch } from "react-redux";
import {addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const useUpcomingMovies=()=>{
//fetching the data and putting these movies in to the store
const dispatch=useDispatch();
const getUpcomingMovies=async()=>{
   const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);

  const json=await data.json();
  //console.log(json);
  dispatch(addUpcomingMovies(json.results));//send those movies to store
};
useEffect(()=>{
  getUpcomingMovies();
},[])
};
export default useUpcomingMovies;