import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,//dont wat to show search right away when clicked on the button then only
        movieResults:null,
        movieNames:null

    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;//if the value of showGptsearch is true then it will become false and if false it will become true

        },
        addGptMovieResult:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.gptMovies=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;

        },

    },
});
export default gptSlice.reducer;
export const{toggleGptSearchView,addGptMovieResult}=gptSlice.actions;