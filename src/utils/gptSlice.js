import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,//dont wat to show search right away when clicked on the button then only


    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;//if the value of showGptsearch is true then it will become false and if false it will become true

        },

    },
});
export default gptSlice.reducer;
export const{toggleGptSearchView}=gptSlice.actions;