import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const useNowPlayingMovies=()=>{
//fetching the data and putting these movies in to the store
const dispatch=useDispatch();
const getNowPlayingMovies=async()=>{
   const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

  const json=await data.json();
  //console.log(json);
  dispatch(addNowPlayingMovies(json.results));//send those movies to store
};
useEffect(()=>{
  getNowPlayingMovies();
},[])
};
export default useNowPlayingMovies;