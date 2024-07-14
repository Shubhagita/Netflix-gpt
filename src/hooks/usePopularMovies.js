import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const usePopularMovies=()=>{
//fetching the data and putting these movies in to the store
const dispatch=useDispatch();
const getPopularMovies=async()=>{
   const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

  const json=await data.json();
  //console.log(json);
  dispatch(addPopularMovies(json.results));//send those movies to store
};
useEffect(()=>{
  getPopularMovies();
},[])
};
export default usePopularMovies;