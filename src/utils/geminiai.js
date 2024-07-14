import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API } from "./constants";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_API);
export default genAI;