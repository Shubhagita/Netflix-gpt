import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";

import { useRef } from "react";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar=()=>{
    const dispatch=useDispatch();
    const langKey=useSelector((store)=>store?.config?.lang);
    const searchText=useRef(null);
   console.log(searchText);
//    const gptQuery =
//    "Act as a Movie Recommendation system and suggest some movies for the query : " +
//    searchText.current.value +
//    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

const SearchTmdbMovies = async (movie) => {
    
    const data = await fetch(
        'https://api.themoviedb.org/3/search/movie?query='+
        movie+
        '&include_adult=false&language=en-US&page=1'
    , API_OPTIONS);
    const json = await data.json();
    return json.results;
  };
  
      const handleGptSearchClick = async () => {
        const gptQuery =
          "Act as a movie recommendation system and suggest some movie names for the query :" +
          searchText.current.value +
          ", give only 5 movie names, comma seperated";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        const prompt = gptQuery;
    
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        if (!text) return null;
       //console.log(text);
    
        const geminiMovieResults = text.split(",");
        const promiseArray = geminiMovieResults.map((movie) => SearchTmdbMovies(movie));//5 promises
        //for each movie call searchtmdb movie and pass that movie call 5 times
        //will return array of promise for each movie there will be a promise and they will take some time to resolve
        const tmdbMovieResults = await Promise.all(promiseArray);
        //program will wait for promise.all to finish
       // console.log(tmdbMovieResults);
        dispatch(addGptMovieResult({movieNames:geminiMovieResults,movieResults:tmdbMovieResults}))
      };


    return(
        <div className="pt-[10%] flex justify-center">
    <form onSubmit={(e)=> e.preventDefault()} className="w-1/2 bg-black grid grid-cols-12">
        <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey]?.gptSearchPlaceholder}/>
        <button onClick={handleGptSearchClick} className="py-2 px-4 col-span-3 m-4 bg-red-500 text-white rounded-lg">{lang[langKey]?.search}</button>
    </form>
    </div>
    );
}
export default GptSearchBar;