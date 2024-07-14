import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const useTopRatedMovies=()=>{
//fetching the data and putting these movies in to the store
const dispatch=useDispatch();
const getTopRatedMovies=async()=>{
   const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

  const json=await data.json();
  //console.log(json);
  dispatch(addTopRatedMovies(json.results));//send those movies to store
};
useEffect(()=>{
  getTopRatedMovies();
},[])
};
export default useTopRatedMovies;