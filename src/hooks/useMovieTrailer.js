import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
    const getMovieVideos=async()=>{//make api dynamic
        const data =await fetch('https://api.themoviedb.org/3/movie/'+movieId+ '/videos?language=en-US',API_OPTIONS);
   const json=await data.json();
  // console.log(json);
   const filterData=json.results.filter(video=> video.type =="Trailer" )//filter out the json on basis of trailer
   const trailer=filterData.length? filterData[0]: json.results[0];
   //if length is 0 then json result 0 will be executed
    dispatch(addTrailerVideo(trailer));//putting the trailer into store and dispatchthe action
    };
    useEffect(()=>{
       if(!trailerVideo) getMovieVideos();
    },[]);
}
export default useMovieTrailer;