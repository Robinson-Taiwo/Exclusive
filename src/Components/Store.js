import { configureStore, createSlice } from "@reduxjs/toolkit";
import signupReducer from "./Features/SignUp/SignupSlice";


const store = configureStore({

    reducer: {

        signup: signupReducer
    }

})



export default store