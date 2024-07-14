import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer=()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies==null)//early return When we first execute all the nowPlayingmovies are null to avoid the error use this
        return;
    const mainMovie=movies[0];
    //console.log(movies);
    const {id,original_title,overview}= mainMovie;
    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>

        </div>
        
    )
}
export default MainContainer;