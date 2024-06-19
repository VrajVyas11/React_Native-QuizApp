import { configureStore } from "@reduxjs/toolkit"; 
import GetQuestions from "./GetQuestions";
export const store = configureStore({
    reducer: {
        getquestions:GetQuestions,
    }
})