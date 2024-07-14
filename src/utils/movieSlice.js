import {createSlice} from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;//whatever will come here will put in now playing movies
        },
            addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;

        
        },
    }
});
export const{addNowPlayingMovies,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer;