import { LoginBG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSeachBar";

const GptSearch=()=>{
    return(
        <div>
        <div className="fixed -z-10">
        <img src={LoginBG}
        alt="bg image"/>
        </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>

        </div>
    );
};
export default GptSearch;